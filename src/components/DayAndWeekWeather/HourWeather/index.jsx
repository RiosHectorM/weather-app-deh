import React from "react";
import CloudIcon from "../WeekWeather/Icons/CloudIcon";
import RainIcon from "../WeekWeather/Icons/RainIcon";
import SnowIcon from "../WeekWeather/Icons/SnowIcon";
import SunIcon from "../WeekWeather/Icons/SunIcon";

import { motion } from "framer-motion";
import { slideIn } from "../../../constants/motion";

function HourWeather(data) {
  
  function horas(condition) {
    return condition === "Clear" ? (
      <SunIcon />
    ) : condition === "Drizzle" ||
      condition === "Thunderstorm" ||
      condition === "Rain" ? (
      <RainIcon />
    ) : condition === "Snow" ? (
      <SnowIcon />
    ) : condition === "Clouds" ? (
      <CloudIcon />
    ) : null;
  }

  return (
    <motion.div
      variants={slideIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-[240px]"
    >
      {data.data && (
        <div
          className={`flex flex-row flex-nowrap h-full overflow-auto rounded-t-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 `}
        >
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["0"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["0"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["0"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["1"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["1"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["1"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["2"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["2"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["2"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["3"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["3"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["3"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>

          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["4"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["4"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["4"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["5"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["5"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["5"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["6"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["6"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["6"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col py-5 text-center justify-center items-center"
          >
            {horas(data.data["7"].weather[0].main)}
            <div className="text-white ">
              <p className="text-xl">
                {data.data && data.data["7"].dt_txt.slice(-8, -3)}
              </p>
              <p className="m-0 flex-nowrap p-0 text-2xl">
                {data.data &&
                  (data.data["7"].main.temp - 273.15).toFixed(2) + "°"}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default HourWeather;
