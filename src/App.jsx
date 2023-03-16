import Header from "./components/Header";
import MenuBtn from "./components/MenuBtn";
import "./styles/Home.css";

export default function Home() {
  return (
<div className="container">
  <main className="main" id="section3D">
<Header/>
<MenuBtn/>
  </main>
    <main className="main" id="sectionDrop">
        <h1 className="title">
          Welcome
        </h1>

        <p className="description">
          Get started your desired!
        </p>

        <div className="grid">

        </div>
  </main>
</div>
  );
}
