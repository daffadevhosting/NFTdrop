import { ConnectWallet } from "@thirdweb-dev/react";
import NavBar from "./components/Navbar";
import BodyNftDrop from "./components/Body";
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
          <button onClick={closeBtn}>
          <i className="far fa-times-circle close_btn"></i>
          </button>
            <h1>Other Canvas</h1>
            <p> /on progress</p>
          </section>
  
          <section id='NFTdrop'>
          <button onClick={closeBtn}>
          <i className="far fa-times-circle close_btn"></i>
          </button>
            <BodyNftDrop />
          </section>
  
         <section id='Blog'>
          <button onClick={closeBtn}>
          <i className="far fa-times-circle close_btn"></i>
          </button>
           <h1>Blogs</h1>
          </section>
  
         <section id='Account'>
          <button onClick={closeBtn}>
          <i className="far fa-times-circle close_btn"></i>
          </button>
           <h1>Nft owner Account</h1>
          </section>
    </div>
</>
  );
}
