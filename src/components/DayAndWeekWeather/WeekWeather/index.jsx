import React from "react";
import CloudIcon from "./Icons/CloudIcon.jsx";
import RainIcon from "./Icons/RainIcon.jsx";
import SnowIcon from "./Icons/SnowIcon.jsx";
import SunIcon from "./Icons/SunIcon.jsx";

import { motion } from "framer-motion"
import { slideIn } from "../../../constants/motion.jsx";

function WeekWeather(data) {

  function dias(condition) {
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
      variants={slideIn("left", "spring", 1, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col h-auto mb-5 "
    >
      {data.data && (
        <div
          className={`flex flex-col sm:flex-row flex-wrap rounded-b-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 justify-center`}
        >
          <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
            {dias(data.data["0"].weather[0].main)}
            <div className="text-white w-full">
              <p className="text-2xl">
                {data.data && data.data["0"].dt_txt.slice(0, 10)}
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["0"].main.temp_min - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["0"].main.temp_max - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MAX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
            {dias(data.data["8"].weather[0].main)}
            <div className="text-white w-full">
              <p className="text-2xl">
                {data.data && data.data["8"].dt_txt.slice(0, 10)}
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["8"].main.temp_min - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["8"].main.temp_max - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MAX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 flex sm:w-1/4 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
            {dias(data.data["16"].weather[0].main)}
            <div className="text-white w-full">
              <p className="text-2xl">
                {data.data && data.data["16"].dt_txt.slice(0, 10)}
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["16"].main.temp_min - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["16"].main.temp_max - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MAX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 flex sm:w-1/3 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
            {dias(data.data["24"].weather[0].main)}
            <div className="text-white w-full">
              <p className="text-2xl">
                {data.data && data.data["24"].dt_txt.slice(0, 10)}
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["24"].main.temp_min - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["24"].main.temp_max - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MAX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 flex sm:w-1/3 sm:flex-col py-5 text-center justify-around sm:justify-center items-center lg:flex-1">
            {dias(data.data["32"].weather[0].main)}
            <div className="text-white w-full">
              <p className="text-2xl">
                {data.data && data.data["32"].dt_txt.slice(0, 10)}
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["32"].main.temp_min - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-0 flex-nowrap p-0 text-2xl">
                    {data.data &&
                      (data.data["32"].main.temp_max - 273.15).toFixed(2) + "°"}
                  </p>
                  <p className="text-lg">MAX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default WeekWeather;
