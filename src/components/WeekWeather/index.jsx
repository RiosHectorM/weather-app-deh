import React from "react";
import { CONTAINERMAIN } from "../../cssGlobals.jsx";
import CloudAndSun from "./Icons/CloudAndSun.jsx";
import CloudIcon from "./Icons/cloudIcon.jsx";
import RainIcon from "./Icons/RainIcon.jsx";
import SnowIcon from "./Icons/SnowIcon.jsx";
import SunIcon from "./Icons/SunIcon.jsx";

function WeekWeather() {
  return (
    <div className="flex h-screen flex-col">
      <h3>Week Weather</h3>
      <div
        className={`flex flex-col sm:flex-row flex-wrap rounded-b-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-32 `}
      >
        <div className="m-2 flex flex-1 sm:flex-col py-5 text-center justify-around sm:justify-center items-center">
          <SunIcon />
          <div className="text-white">
            <p className="text-2xl">SUN DAY</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 sm:flex-col py-5 text-center justify-around sm:justify-center items-center">
          <CloudIcon />
          <div className="text-white">
            <p className="text-2xl">CLOUD DAY</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 sm:flex-col py-5 text-center justify-around sm:justify-center items-center">
          <SnowIcon />
          <div className="text-white">
            <p className="text-2xl">TODAY+2</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 sm:flex-col py-5 text-center justify-around sm:justify-center items-center">
          <CloudAndSun />
          <div className="text-white">
            <p className="text-2xl">TODAY+3</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 sm:flex-col py-5 text-center justify-around sm:justify-center items-center">
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
