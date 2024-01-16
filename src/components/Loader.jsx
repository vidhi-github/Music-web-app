import React from "react";
import { Audio, CirclesWithBar } from "react-loader-spinner";
export const Loader = () => {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export const CircleLoader = () => {
  return (
    <CirclesWithBar
      height="40"
      width="40"
      color="#000000"
      outerCircleColor="#000000"
      innerCircleColor="#000000"
      barColor="#000000"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
