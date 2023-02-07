import React from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

const Projects = () => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <div
      id="Projects"
      className={` ${
        mode === "dark" ? "bg-[#1e1818]" : "bg-white"
      } relative w-full xs:h-max lg:top-[125rem] md:pt-20 xs:top-[180rem] xs:p-32 h-[37rem] xs:w-[643px] sm:w-full `}
    >
      <h1
        className={` ${
          mode === "dark" ? "text-gray-100 " : "text-black "
        } xs:text-5xl sm:text-6xl md:text-5xl text-center`}
      >
        Projects 💯
      </h1>
      <div className="p-20 flex flex-wrap xs:p-10 justify-center items-center">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
