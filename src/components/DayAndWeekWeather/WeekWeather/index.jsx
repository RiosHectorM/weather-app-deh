import React from "react";
import CloudAndSun from "./Icons/CloudAndSun.jsx";
import CloudIcon from "./Icons/cloudIcon.jsx";
import RainIcon from "./Icons/RainIcon.jsx";
import SnowIcon from "./Icons/SnowIcon.jsx";
import SunIcon from "./Icons/SunIcon.jsx";

function WeekWeather() {
  return (
    <div className="flex h-auto flex-col pb-5">
      <div
        className={`flex flex-col sm:flex-row flex-wrap rounded-b-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 justify-center`}
      >
        <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
          <SunIcon />
          <div className="text-white">
            <p className="text-2xl">SUN DAY</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
          <CloudIcon />
          <div className="text-white">
            <p className="text-2xl">CLOUD DAY</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
          <SnowIcon />
          <div className="text-white">
            <p className="text-2xl">TODAY+2</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex sm:w-1/3 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
          <CloudAndSun />
          <div className="text-white">
            <p className="text-2xl">TODAY+3</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex sm:w-1/3 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
          <RainIcon />
          <div className="text-white">
            <p className="text-2xl">TODAY+4</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekWeather;
