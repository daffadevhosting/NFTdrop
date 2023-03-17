import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function Header() {
  return (
<div className="header">
        <div className="navbar">
          <span className="titleHead"><b>NFT</b> drop</span>
<div className="connectBtn">
          <ConnectWallet />
</div>
        </div>
</div>
  );
}
