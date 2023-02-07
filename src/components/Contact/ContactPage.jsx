import React from "react";
import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";

const ContactPage = () => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <>
      <div
        id="Contact"
        className={` ${
          mode === "dark" ? "bg-[#1e1818]" : "bg-white"
        } relative w-full xs:h-max lg:top-[125rem] md:pt-20 xs:top-[178rem] xs:p-10 h-[37rem] xs:w-[643px] sm:w-full `}
      >
        <h1
          className={` ${
            mode === "dark" ? " text-gray-100 " : "text-black "
          } xs:text-5xl sm:text-6xl md:text-5xl text-center`}
        >
          Contact 👇
        </h1>
        <div className="p-20 flex flex-wrap xs:p-10 justify-center items-center">
          <ContactDetails />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
