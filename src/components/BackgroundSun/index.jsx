import React from "react";
import styles from "./BackgroundSun.module.css";
import { motion } from "framer-motion";
import { zoomInBG } from "../../constants/motion";


function BackgroundSnow() {
  return (
    <motion.div
      variants={zoomInBG(0.3, 2)}
      initial="hidden"
      whileInView="show"
      className="bg-black fixed h-full w-full -z-10"
    >
      <div className={styles.container}>
        <div className="flex flex-col"></div>
      </div>
    </motion.div>
  );
}

export default BackgroundSnow;
