import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../constants/motion";


function Time() {
  return (
    <motion.div
      variants={slideIn("left", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col pb-2 h-auto"
    >
      <div
        className={`flex flex-row flex-nowrap h-full overflow-auto rounded-b-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 lg:mx-32 text-white justify-center text-center`}
      >
        <div>Time: asdasd </div>
      </div>
    </motion.div>
  );
}

export default Time;
