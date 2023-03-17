import { ConnectWallet } from "@thirdweb-dev/react";
import NavBar from "./components/Navbar";
import BodyNftDrop from "./components/Body";
import "./styles/Home.css";

export default function Home() {
  return (
<>
<NavBar />
    <div className="container">
          <section id='NFTgallery'>
          <a href="#">
          <i className="far fa-times-circle close_btn"></i>
          </a>
            <h1>Other Canvas</h1>
            <p> /on progress</p>
          </section>
  
          <section id= 'NFTdrop'>
          <a href="#">
          <i className="far fa-times-circle close_btn"></i>
          </a>
            <BodyNftDrop />
          </section>
  
         <section id= 'Blog'>
          <a href="#">
          <i className="far fa-times-circle close_btn"></i>
          </a>
           <h1>Blogs</h1>
          </section>
  
         <section id= 'Account'>
          <a href="#">
          <i className="far fa-times-circle close_btn"></i>
          </a>
           <h1>Nft owner Account</h1>
          </section>
    </div>
</>
  );
}
