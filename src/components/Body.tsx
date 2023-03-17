import { useMemo, useState } from "react";
import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import Timer from "./Timer";
import { parseIneligibility } from "/utils/parseIneligibility";
import "../styles/Home.css";

// Masukkan alamat Kontrak NFT drop kamu
const DropAddress = "0x6Bc4C7b6C0aF7F44f592E66A8b92e8D7d269a608";

export default function Body() {
  const { contract: nftDrop } = useContract(DropAddress);

  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  const { data: contractMetadata } = useContractMetadata(nftDrop);

  const claimConditions = useClaimConditions(nftDrop);

  const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    address || ""
  );
  const claimerProofs = useClaimerProofs(nftDrop, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
    quantity,
    walletAddress: address || "",
  });
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
  const claimedSupply = useClaimedNFTSupply(nftDrop);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !nftDrop
    );
  }, [
    activeClaimCondition.isLoading,
    nftDrop,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Terjual Habis";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      if (pricePerToken.eq(0)) {
        return "Minting (Gratis)";
      }
      return `Mint (${priceToMint})`;
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Memeriksa Kelayakan...";
    }

    return "Mengklaim tidak tersedia";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);
  return (
    <>
    <div className="mint_container">
        {isLoading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <>
        <div className="item_section">
          <div className="card">
              <div className="wrapper">
                {/* Gambar */}
                <MediaRenderer
                  className="cover_image"
                  src={contractMetadata?.image}
                  alt={`${contractMetadata?.name} preview image`}
                />
              </div>
            {/* Nama NFT kamu */}
              <div className="title">
                <h1>{contractMetadata?.name}</h1>
              </div>
            {/* Descrip NFT */}
            <MediaRenderer
              className="character"
              src={contractMetadata?.image}
              alt={`${contractMetadata?.name} preview image`}
            />
          </div>
        </div>
              {/* Total minting */}
          <div className="detail_section">
              <div className="mintCompletionArea">
                <div className="mintAreaLeft">
                  <p>Total Minted</p>
                </div>
                <div className="mintAreaRight">
                  {claimedSupply && unclaimedSupply ? (
                    <p>
                      <b>{numberClaimed}</b>
                      {" / "}
                      {numberTotal}
                    </p>
                  ) : (
          <div className="loading">
            <p>Loading...</p>
          </div>
                  )}
                </div>
              </div>
          
              {claimConditions.data?.length === 0 ||
              claimConditions.data?.every(
                (cc) => cc.maxClaimableSupply === "0"
              ) ? (
                <div className="text_center">
                  <h2>
                    nftDrop ini belum siap untuk Mint.
                  </h2>
                </div>
              ) : !activeClaimCondition.data && claimConditions.data ? (
                <div>
                  <h2>Drop dimulai dalam: </h2>
                  <Timer date={claimConditions.data[0].startTime} />
                </div>
              ) : (
                <>
                <div className="hidden">
                <p>Quantity</p>
                <div className="qtyCounter">
                <button
                disabled={quantity.length === 1}
                icon='minus'
                onClick={() => setQuantity(quantity - 1)}></button>
                    <h4>{quantity}</h4>
                <button
                      icon='plus'
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= maxClaimable}></button>
                </div>
                </div>
                <div className="btnMint">
                {isSoldOut ? (
                      <div>
                        <h2>Terjual Habis</h2>
                      </div>
                    ) : (
                      <Web3Button
                        contractAddress={nftDrop?.getAddress() || ""}
                        action={(cntr) => cntr.erc721.claim(quantity)}
                        isDisabled={!canClaim || buttonLoading}
                        onError={(err) => {
                          console.error(err);
                          alert("Error claiming NFTs");
                        }}
                        onSuccess={() => {
                          setQuantity(1);
                          alert("Successfully claimed NFTs");
                        }}
                      >
                        {buttonLoading ? "Loading..." : buttonText}
                      </Web3Button>
                    )}
                </div>
                </>
                )}
          </div>
          </>
          )}
    </div>
    </>
  );
};
