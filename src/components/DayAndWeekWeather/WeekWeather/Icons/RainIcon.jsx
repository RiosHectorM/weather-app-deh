import React from "react";
import styles from "../WeekWeather.module.css";
import { motion } from "framer-motion";
import { zoomIn } from "../../../../constants/motion";


function RainIcon() {
  return (
    <motion.div
      variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
       className="my-auto w-[100px] ">
      <div className={`${styles.cloud} flex justify-center m-auto`}>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
      </div>
    </motion.div>
  );
}

export default RainIcon;
