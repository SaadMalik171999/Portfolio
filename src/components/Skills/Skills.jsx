import React, { useState } from "react";
import SkillsGIF from "../../assets/utils/Skills.json";
import DisplayLottie from "../Lottie/DisplayLottie";
import { useSelector } from "react-redux";
const Skills = () => {
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
      }  sm:w-full xs:h-max absolute xs:top-[60rem] lg:top-[40rem] h-[42rem] -z-10 items-center justify-center`}
    >
      <div
        className={` ${
          mode === "dark"
            ? "text-white duration-500 "
            : "text-[#1e1818] duration-500 "
        } lg:flex flex-row-reverse p-8 items-center justify-center my-16 xs:mx-0 md:mx-8`}
      >
        <div className="sm:flex-1 xs:w-[580px] sm:w-[600px]">
          <h1 className="xs:text-5xl sm:text-6xl md:text-5xl">
            Skills, What I have ✌
          </h1>
          <p className="mt-4 xs:text-3xl sm:text-3xl md:text-3xl text-clip font-light">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <ul className="text-center p-5 flex flex-wrap justify-center items-center">
            {softwareSkills.map((value, i) => {
              return (
                <li
                  className="px-6 py-2 hover:text-[#38e92b] duration-200"
                  key={i + 1}
                  name={value.skillName}
                >
                  {console.log(value.hoverFont)}
                  <i className={`${value.fontAwesomeClassname} text-5xl `}></i>
                  <p>{value.skillName}</p>
                </li>
              );
            })}
          </ul>

          <ul className="text-xl ">
            <li>
              🔱 Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </li>
            <li>
              🔱 Progressive Web Applications ( PWA ) in normal and SPA Stacks
            </li>
            <li>
              🔱Integration of third party services such as Firebase/ AWS /
              Digital Ocean
            </li>
          </ul>
        </div>
        <div className="sm:flex-1 ">
          <DisplayLottie animationData={SkillsGIF} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
