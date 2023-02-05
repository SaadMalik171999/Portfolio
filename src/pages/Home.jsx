import React from "react";
import About from "../components/About/About.jsx";
import Header from "../components/Header/Header.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import Skills from "../components/Skills/Skills.jsx";

const Home = () => {
  return (
    <>
      <Header />
      {/* <div className="relative"> */}
      <Introduction />
      <About />
      <Skills />
      {/* </div> */}
    </>
  );
};

export default Home;
