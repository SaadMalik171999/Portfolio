import React from "react";
import { useSelector } from "react-redux";
import { contactDetails } from "../../PortfolioInfo";

const ContactDetails = () => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <>
      {contactDetails?.map((value, i) => {
        return (
          <div
            key={i}
            className={`w-[19rem] z-10 h-[23rem] m-6 flex justify-center items-center shadow-md duration-500 hover:-translate-y-3 rounded-md
             ${mode === "dark" ? "shadow-[#38e92b81] " : "shadow-grey-50"} `}
          >
            <div
              className={`${
                mode === "dark"
                  ? "text-white duration-500"
                  : "text-[#1e1818] duration-500"
              } text-center flex flex-col justify-evenly pt-14 items-center`}
            >
              <div
                className={`rounded-full w-20 h-20 flex flex-col justify-center items-center bg-[#38e92b]`}
              >
                <i className={`${value.contactIcon} text-4xl`}></i>
              </div>

              <div className="pt-12">
                <h1 className="text-2xl font-semibold">{value?.contactName}</h1>
                <p className="text-md h-24">{value?.contactAddress}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContactDetails;
