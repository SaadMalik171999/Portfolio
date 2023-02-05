import React from "react";
import Lottie from "react-lottie";

const DisplayLottie = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: props.animationData,
  };
  return (
    <Lottie
      options={defaultOptions}
      width={450}
      isClickToPauseDisabled={true}
    />
  );
};

export default DisplayLottie;
