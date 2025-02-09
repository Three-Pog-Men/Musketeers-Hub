import React from 'react'
import SkillSet from "../components/SkillSet";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Us from "../components/Us";
import BackToTop from "../components/BackToTop"

import "../assets/styles/css/landingpage.css"

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <section id="about-us">
          <AboutUs />
        </section>
        <section id="skills">
          <SkillSet />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="us">
          <Us />
        </section>
        <Footer />
        <BackToTop />
    </div>
  );
};


export default LandingPage