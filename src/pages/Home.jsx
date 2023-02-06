import React from "react";
import About from "../components/About/About.jsx";
import Header from "../components/Header/Header.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import ContactPage from "../components/Contact/ContactPage.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <ContactPage />
    </>
  );
};

export default Home;
