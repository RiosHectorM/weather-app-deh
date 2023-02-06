import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../constants/motion";


function DataWeather({ humidity, pressure, feels }) {
  return (
    <motion.div
      variants={slideIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-auto "
    >
      {feels && (
        <div
          className={`flex flex-row flex-nowrap h-full overflow-auto rounded-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 text-white justify-center text-center`}
        >
          <p>Humidity: {humidity}</p>
          <p>Pressure: {pressure}</p>
          <p>Feels Like: {feels}</p>
        </div>
      )}
    </motion.div>
  );
}

export default DataWeather;
