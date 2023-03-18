import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { SlGrid, SlDrop, SlFeed, SlGhost } from "react-icons/sl";
import "../styles/Home.css";

export default function Header() {

function getfocus(){
    document.getElementByClassName('nav_link').focus()
}

function losefocus(){
    document.getElementByClassName('nav_link').blur()
}

  return (
<nav>
   <a className="nav_link" href="#NFTgallery">
   <SlGrid/>
   </a>
   <a className="nav_link" href="#NFTdrop">
   <SlDrop/>
   </a>
   <a className="nav_link" href="#Blog">
   <SlFeed/>
   </a>
   <a className="nav_link" href="#Account">
   <SlGhost/>
   </a>
 </nav>
  );
}
