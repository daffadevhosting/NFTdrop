import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function Header() {
  return (
<nav>
   <a href="#NFTgallery">
   <i className="fas fa-images"></i>
   </a>
   <a href="#NFTdrop">
   <i className="fas fa-tint"></i>
   </a>
   <a href="#Blog">
   <i className="fas fa-blog"></i>
   </a>
   <a href="#Account">
   <i className="far fa-user"></i>
   </a>
 </nav>
  );
}
