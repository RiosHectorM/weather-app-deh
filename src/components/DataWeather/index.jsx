import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../constants/motion";

function DataWeather({ humidity, pressure, visibility, speed }) {
  return (
    <motion.div
      variants={slideIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-auto "
    >
      {visibility && (
        <div
          className={`sm:flex sm:flex-row sm:flex-nowrap h-full overflow-auto rounded-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 text-white justify-around text-center grid gap-4 grid-cols-2`}
        >
          <div className="flex flex-col items-center">
            <img src="/agua.png" alt="humidity" className="w-auto h-[100px]" />
            <p className="self-center px-2">Humidity </p>
            <p className="text-2xl">{humidity}%</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/press.png" alt="pressure" className="w-auto h-[100px]" />
            <p className="self-center px-2">Pressure </p>
            <p className="text-2xl">{pressure} hPa</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/windsock.png"
              alt="windspeed"
              className="w-auto h-[100px]"
            />
            <p className="self-center px-2">Wind Speed </p>
            <p className="text-2xl">{speed} KMH</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/visibility.png"
              alt="visibility"
              className="w-auto h-[100px]"
            />
            <p className="self-center px-2">Visibility </p>
            <p className="text-2xl">{visibility} Km</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default DataWeather;
