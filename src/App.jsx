import { ConnectWallet } from "@thirdweb-dev/react";
import NavBar from "./components/Navbar";
import BodyNftDrop from "./components/Body";
import GltfLoader from "./components/GltfLoader";
import { RiCloseCircleLine } from "react-icons/ri";
import "./styles/Home.css";

export default function Home() {

function closeBtn() {
    location.replace("#");   
}

  return (
<>
<NavBar />
    <div className="container">
          <section id='NFTgallery'>
          <a>
          <RiCloseCircleLine
             className="close_btn" onClick={closeBtn}/>
          </a>
            <GltfLoader/>
          </section>
  
          <section id='NFTdrop'>
          <a>
          <RiCloseCircleLine
             className="close_btn" onClick={closeBtn}/>
          </a>
            <BodyNftDrop />
          </section>
  
         <section id='Blog'>
          <a>
          <RiCloseCircleLine
             className="close_btn" onClick={closeBtn}/>
          </a>
           <h1>Blogs</h1>
          </section>
  
         <section id='Account'>
          <a>
          <RiCloseCircleLine
             className="close_btn" onClick={closeBtn}/>
          </a>
           <h1>Nft owner Account</h1>
          </section>
    </div>
</>
  );
}
