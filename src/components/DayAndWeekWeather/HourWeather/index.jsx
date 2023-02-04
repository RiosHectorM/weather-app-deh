import React from "react";
import CloudAndSun from "../WeekWeather/Icons/CloudAndSun";
import CloudIcon from "../WeekWeather/Icons/cloudIcon";
import RainIcon from "../WeekWeather/Icons/RainIcon";
import SnowIcon from "../WeekWeather/Icons/SnowIcon";
import SunIcon from "../WeekWeather/Icons/SunIcon";

function HourWeather() {
  return (
    <div className="flex h-auto flex-col pb-2">
      <div
        className={`flex flex-row flex-nowrap overflow-auto rounded-t-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 `}
      >
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <SunIcon height={"50px"} width={"50px"} />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <SunIcon height={"50px"} width={"50px"} />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <SunIcon height={"50px"} width={"50px"} />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <SunIcon height={"50px"} width={"50px"} />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>

        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <CloudIcon />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <SnowIcon />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <CloudAndSun />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
        <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center">
          <RainIcon />
          <div className="text-white ">
            <p className="text-xl">12:00</p>
            <p className="m-0 flex-nowrap p-0 text-2xl">T°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourWeather;
