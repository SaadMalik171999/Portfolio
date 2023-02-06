import React from "react";
import { useSelector } from "react-redux";

const CardIcon = ({ iconsClassName }) => {
  const { mode } = useSelector((state) => state.themes);

  return (
    <>
      {iconsClassName.map((value, i) => {
        return (
          <div key={i} className="ml-2 mt-3 duration-500">
            <div className="w-8 h-8 flex items-left justify-center border-2 border-gray-200  p-1 rounded-md">
              <img
                src={`${value}`}
                className={` ${
                  mode === "dark" ? "text-gray-100 " : "text-gray-600 "
                }  hover:text-[#38e92b] text-lg flex items-center justify-center `}
              ></img>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardIcon;
