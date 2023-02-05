import React, { useState } from "react";
import ToggleSwitch from "../../assets/utils/ToggleSwitch";
import { useSelector } from "react-redux";
import { GrClose, GrMenu } from "react-icons/gr";

const Header = () => {
  const { mode } = useSelector((state) => state.themes);
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Intro", link: "#intro" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div
          className={`md:flex items-center justify-between ${
            mode === "dark" ? "bg-[#1e1818]" : "bg-white"
          } py-4 md:px-10 px-7`}
        >
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#38e92b]">
            SAAD MALIK
          </div>

          <div
            onClick={() => setOpen(!open)}
            className={`text-3xl p-1 rounded-md bg-[#38e92b] absolute right-8 top-3 cursor-pointer md:hidden`}
          >
            {open ? (
              <GrClose className="icon  transition-all duration-500 ease-in" />
            ) : (
              <GrMenu className="icon transition-all duration-500 ease-in" />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static ${
              mode === "dark"
                ? "text-white bg-[#1e1818] duration-500 "
                : "text-[#1e1818]  bg-white duration-500 "
            } md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-11" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="ml-4">
              <ToggleSwitch />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
