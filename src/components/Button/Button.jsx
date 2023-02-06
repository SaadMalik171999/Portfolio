import React from "react";

const Button = ({ name, href, isDownload }) => {
  return (
    <>
      <div className="mt-3">
        <div
          type="button"
          className="text-white xs:text-2xl bg-[#29ca1e] hover:bg-[white] hover:text-[#29ca1e] duration-500 hover:outline hover:outline-[#29ca1e] font-medium rounded-lg text-lg px-8 py-2.5 text-center mr-4 mb-2"
        >
          <a href={href} target={"_blank"} download={isDownload}>
            {name}
          </a>
        </div>
      </div>
    </>
  );
};

export default Button;
