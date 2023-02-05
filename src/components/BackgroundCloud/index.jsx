import React from "react";
import styles from "./BackgroundCloud.module.css";
import { motion } from "framer-motion";
import { zoomInBG } from "../../constants/motion";


function BackgroundCloud() {
  return (
    <motion.div
      variants={zoomInBG(0.3, 2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-r from-cyan-100 via-sky-500 to-blue-700 fixed h-full w-full -z-10">
      <div id="clouds">
        <div className={`${styles.cloud} ${styles.x1}`}></div>
        <div className={`${styles.cloud} ${styles.x2}`}></div>
        <div className={`${styles.cloud} ${styles.x3}`}></div>
        <div className={`${styles.cloud} ${styles.x4}`}></div>
        <div className={`${styles.cloud} ${styles.x5}`}></div>
      </div>
    </motion.div>
  );
}

export default BackgroundCloud;
