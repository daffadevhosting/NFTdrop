import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function Header() {
  return (
<div className="header">
        <div className="navbar">
          <ConnectWallet />
        </div>
</div>
  );
}
