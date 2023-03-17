import { ClaimEligibility } from "@thirdweb-dev/sdk";

export function parseIneligibility(
  reasons: ClaimEligibility[],
  quantity = 0
): string {
  if (!reasons.length) {
    return "";
  }

  const reason = reasons[0];

  if (
    reason === ClaimEligibility.Unknown ||
    reason === ClaimEligibility.NoActiveClaimPhase ||
    reason === ClaimEligibility.NoClaimConditionSet
  ) {
    return "AirDrop belum siap di minting.";
  } else if (reason === ClaimEligibility.NotEnoughTokens) {
    return "Kamu tidak punya cukup saldo untuk minting.";
  } else if (reason === ClaimEligibility.AddressNotAllowed) {
    if (quantity > 1) {
      return `Anda tidak memenuhi syarat untuk minting ${quantity} token.`;
    }

    return "Anda tidak memenuhi syarat untuk minting saat ini.";
  }

  return reason;
}
