import React, { useState } from "react";
import AboutGIF from "../../assets/utils/About.json";
import DisplayLottie from "../Lottie/DisplayLottie";
import { useSelector } from "react-redux";
const About = () => {
  const { mode } = useSelector((state) => state.themes);

  const softwareSkills = [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Angular Js",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
  ];

  return (
    <div
      id="skills"
      className={`${
        mode === "dark" ? "bg-[#1e1818]" : "bg-white"
      }  sm:w-full xs:h-max absolute xs:top-[138rem] 
      sm:top-[133rem] md:top-[130rem]  lg:py-[70px] lg:top-[90rem] xl:top-[84rem] 2xl:top-[80rem] -z-10 items-center justify-center`}
    >
      <div
        className={` ${
          mode === "dark"
            ? "text-white duration-500 "
            : "text-[#1e1818] duration-500 "
        } lg:flex p-8 items-center justify-center my-16 xs:mx-0 md:mx-8`}
      >
        <div className="sm:flex-1 xs:w-[580px] sm:w-[600px]">
          <h1 className="xs:text-5xl sm:text-6xl md:text-5xl">About Me ✌</h1>
          <p className="mt-4 xs:text-2xl sm:text-2xl md:text-2xl text-clip font-normal">
            I am a Computer Scientist who just graduated from the
            <b> Iqra University Karachi </b> in Computer Science. I am a highly
            skilled professional developer who loves to take on the challenges
            and then solve them.
            <br></br>
            <br></br>
            While doing my graduation, I 've also been studying a lot on my own
            to learn new technologies and skills like React JS, Node JS, Angular
            & some other libraries.
          </p>
        </div>
        <div className="sm:flex-1 ">
          <DisplayLottie animationData={AboutGIF} />
        </div>
      </div>
    </div>
  );
};

export default About;
