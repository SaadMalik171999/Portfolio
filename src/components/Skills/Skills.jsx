import React, { useState } from "react";
import SkillsGIF from "../../assets/utils/Skills.json";
import DisplayLottie from "../Lottie/DisplayLottie";
import { useSelector } from "react-redux";
import {
  skillsDescription,
  skillsDetails,
  softwareSkills,
} from "../../PortfolioInfo";

const Skills = () => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <div
      id="Skills"
      className={`${
        mode === "dark" ? "bg-[#1e1818]" : "bg-white"
      }  sm:w-full xs:h-max absolute xs:top-[60rem] lg:top-[40rem] lg:p-20 h-[42rem] items-center justify-center`}
    >
      <div
        className={` ${
          mode === "dark"
            ? "text-white duration-500"
            : "text-[#1e1818] duration-500 "
        } lg:flex flex-row-reverse p-8 items-center justify-center my-16 xs:mx-0 md:mx-8`}
      >
        <div className="sm:flex-1 xs:w-[580px] sm:w-[600px]">
          {skillsDetails?.map((value, i) => {
            return (
              <>
                <div key={i}>
                  <h1 className="xs:text-5xl sm:text-6xl md:text-5xl">
                    {value?.skillIntro}
                  </h1>
                  <p className="mt-4 xs:text-3xl sm:text-3xl md:text-3xl text-clip font-light">
                    {value?.skillPara}
                  </p>
                </div>
              </>
            );
          })}

          <ul className="text-center p-5 flex flex-wrap justify-center items-center">
            {softwareSkills?.map((value, i) => {
              return (
                <li
                  className={`px-6 py-2 cursor-pointer hover:text-[#38e92b] duration-200`}
                  key={i}
                  name={value?.skillName}
                >
                  <i className={`${value?.fontAwesomeClassname} text-5xl`}></i>
                  <p>{value?.skillName}</p>
                </li>
              );
            })}
          </ul>

          <ul className="text-xl ">
            {skillsDescription.map((value, i) => {
              return (
                <div key={i}>
                  <li>{value}</li>
                </div>
              );
            })}
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
