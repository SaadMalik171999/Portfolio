import React from "react";
import PortfolioGIF from "../../assets/utils/programmer.json";
import DisplayLottie from "../Lottie/DisplayLottie";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { devInformation } from "../../PortfolioInfo";
const Introduction = () => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <div
      id="Introduction"
      className={`${
        mode === "dark" ? "bg-[#1e1818]" : "bg-white"
      }  sm:w-full xs:h-max absolute top-[4rem] h-[42rem] items-center justify-center`}
    >
      <div
        className={` ${
          mode === "dark"
            ? "text-white duration-500 "
            : "text-[#1e1818] duration-500 "
        } lg:flex p-8 items-center justify-center my-16 xs:mx-0 md:mx-8`}
      >
        <div className="sm:flex-1 xs:w-[580px] sm:w-[600px]">
          <div>
            {devInformation?.map((value, i) => {
              return (
                <>
                  <h1 className="xs:text-5xl sm:text-6xl md:text-5xl">
                    {value?.devIntro}
                  </h1>

                  <p className="mt-8 xs:text-3xl sm:text-3xl md:text-3xl text-clip font-light">
                    {value?.devDetails}
                  </p>
                </>
              );
            })}

            <div className="flex mt-4">
              <Button
                name="See my Resume"
                href="https://drive.google.com/file/d/1p0FWefw8m9RiSKNqWcFyq8xhjSCjtEaQ/view"
              />
              <Button
                name="View on Linkedin"
                href="https://www.linkedin.com/in/saadmalikdev/"
              />
            </div>
          </div>
        </div>
        <div className="sm:flex-1 ">
          <DisplayLottie animationData={PortfolioGIF} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
