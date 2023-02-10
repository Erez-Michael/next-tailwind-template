import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Projects from "./components/Project/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*
        {/* French 

        <Route path="/accueil" element={<HomeFrench />} />
        <Route path="/projets" element={<ProjectPageFrench />} />
        <Route path="/à-propos" element={<AboutFrench />} />
        <Route path="/contactez-nous" element={<ContactFrench />} />
 */}

        {/* English */}

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
