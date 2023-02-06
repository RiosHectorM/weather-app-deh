import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../constants/motion";

function Temp({ temp, max, min }) {
  return (
    <motion.div
      variants={slideIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-auto"
    >
      {temp && (
        <div
          className={`flex flex-row flex-nowrap h-full overflow-auto bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 text-white justify-center text-center`}
        >
          <p> Temp: {temp}</p>
          <p> Temp Max: {max}</p>
          <p> Temp Min: {min}</p>
        </div>
      )}
    </motion.div>
  );
}

export default Temp;
