import React from "react";
import CardIcon from "./CardIcon";
import { useSelector } from "react-redux";
import { projectDetails } from "../../PortfolioInfo";

const ProjectCard = () => {
  const { mode } = useSelector((state) => state.themes);

  const projectDirectory = (url) => {
    console.log(url?.projectDirectoryURL);
    window.open(url?.projectDirectoryURL);
  };

  return (
    <>
      {projectDetails?.map((value, i) => {
        return (
          <div
            onClick={() => projectDirectory(value)}
            key={i}
            className={` cursor-pointer w-[19rem] z-10 h-[23rem] m-6  shadow-md duration-500 hover:-translate-y-3 rounded-md
             ${mode === "dark" ? "shadow-[#38e92b81]" : "shadow-grey-50"} `}
          >
            <div
              className={`${
                mode === "dark"
                  ? "text-gray-300 duration-500 "
                  : "text-[#1e1818] duration-500 "
              } `}
            >
              <img className="rounded-t-md" src={value?.projectImage} />
              <div className="p-4">
                <h1
                  className={`text-xl font-semibold ${
                    mode === "dark" ? "text-[#38e92b]" : "text-[#1e1818]"
                  } `}
                >
                  {value?.projectName}
                </h1>
                <p className="text-md mt-2 h-24">{value?.projectDescription}</p>
              </div>
              <div className="border-t-2 border-[#38e92b]"></div>

              <div className="flex flex-wrap ml-1 justify-start items-center">
                <CardIcon iconsClassName={value?.iconsClassName} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
