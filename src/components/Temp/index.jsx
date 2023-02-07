import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../constants/motion";

function Temp({ temp, max, min, feels}) {
  return (
    <motion.div
      variants={slideIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-auto"
    >
      {temp && (
        <div
          className={`flex flex-col sm:flex-row flex-nowrap h-full overflow-auto bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 text-white sm:justify-around  justify-center rounded-b-3xl`}
        >
          <div className="flex sm:flex-col flex-row sm:order-first order-last   justify-center">
            <p className="self-center px-2">Feels Like:</p>
            <p className="text-4xl ">{feels}°</p>
          </div>
          <div>
            <p className="text-8xl"> {temp}°</p>
          </div>
          <div className="flex sm:flex-col self-center">
            <div className="flex flex-row px-2">
              <p className="self-center px-2"> Max:</p>
              <p className="text-2xl">{max}</p>
            </div>
            <div className="flex flex-row px-2">
              <p className="self-center px-2"> Min:</p>
              <p className="text-2xl">{min}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Temp;
