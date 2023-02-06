import React, { useState } from "react";
import AboutGIF from "../../assets/utils/About.json";
import DisplayLottie from "../Lottie/DisplayLottie";
import { useSelector } from "react-redux";
import { aboutDetails } from "../../PortfolioInfo";
const About = () => {
  const { mode } = useSelector((state) => state.themes);
  return (
    <div
      id="About"
      className={`${
        mode === "dark" ? "bg-[#1e1818]" : "bg-white"
      }  sm:w-full xs:h-max absolute xs:top-[130rem] 
      sm:top-[133rem] md:top-[130rem] lg:py-[10rem]  lg:top-[83rem] xl:top-[80rem] 2xl:top-[80rem] items-center justify-center`}
    >
      <div
        className={` ${
          mode === "dark"
            ? "text-white duration-500 "
            : "text-[#1e1818] duration-500 "
        } lg:flex p-8 items-center justify-center my-16 xs:mx-0 md:mx-8`}
      >
        <div className="sm:flex-1 xs:w-[580px] sm:w-[600px]">
          {aboutDetails?.map((value, i) => {
            return (
              <>
                <h1 className="xs:text-5xl sm:text-6xl md:text-5xl">
                  {value?.aboutMe}
                </h1>
                <p className="mt-4 xs:text-2xl sm:text-2xl md:text-2xl text-clip font-normal">
                  {value?.aboutDetailsFirstPara}
                  <br></br>
                  <br></br>
                  {value?.aboutDetailsSecondPara}
                </p>
              </>
            );
          })}
        </div>
        <div className="sm:flex-1 ">
          <DisplayLottie animationData={AboutGIF} />
        </div>
      </div>
    </div>
  );
};

export default About;
