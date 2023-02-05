import React from "react";
import styles from "../WeekWeather.module.css";
import { motion } from "framer-motion";
import { zoomIn } from "../../../../constants/motion";


export default function CloudAndSun() {
  return (
    <motion.div
      variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
       className="h-[100px]">
      <div className={styles.weathercloudAndSun}>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
          <div className={styles.rays}></div>
          <div className={styles.rays}></div>
          <div className={styles.rays}></div>
        </div>
        <div className={styles.cloud}></div>
        <div className={`${styles.cloud} hidden `}></div>
      </div>
    </motion.div>
  );
}
