import React from 'react'
import styles from "../WeekWeather.module.css";
import { motion } from 'framer-motion';
import { zoomIn } from "../../../../constants/motion";

export default function SunIcon() {
  return (
    <motion.div
      variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
      className={styles.weathersun}
    >
      <div className={styles.sun}>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
      </div>
    </motion.div>
  );
}
