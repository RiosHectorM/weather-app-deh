import React from 'react'
import styles from "../WeekWeather.module.css";
import { motion } from 'framer-motion';
import { zoomIn } from '../../../../constants/motion';


function CloudIcon() {
  return (
    <motion.div
      variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
      className={`${styles.weathercloud} my-auto`}
    >
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
    </motion.div>
  );
}

export default CloudIcon