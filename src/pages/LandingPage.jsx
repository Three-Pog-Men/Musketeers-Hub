import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Us from "../components/Us";
import "../assets/styles/css/landingpage.css"
import BackToTop from "../components/BackToTop"

import React from 'react'
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div className="main-container">
      <div id="landingPage">
        <NavBar />
        <section id="us">
          <Us />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};


export default LandingPage