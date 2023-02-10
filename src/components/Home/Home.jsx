import React from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import NavBar from "../NavBar";
import TopBar from "../TopBar";
import HomeImages from "../HomeImages";
import Parralax from "./Parralax";


const Home=()=> {
  return (
    <div >
      <TopBar/>
      <NavBar />
          <Parralax />
      <HomeImages />
      <Footer/>
    </div>
  );
}

export default Home;