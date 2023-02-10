import React from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import NavBar from "../NavBar";
import TopBar from "../TopBar";
import HomeImages from "../HomeImages";


const Home=()=> {
  return (
    <div >
      <TopBar/>
      <NavBar />
          <Hero />
          {/*Parralax */}
      <HomeImages />
      <Footer/>
    </div>
  );
}

export default Home;