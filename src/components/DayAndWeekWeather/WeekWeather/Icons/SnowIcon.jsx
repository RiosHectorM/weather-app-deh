import React from "react";
import styles from "../WeekWeather.module.css";
import { motion } from "framer-motion";
import { zoomIn } from "../../../../constants/motion";

export default function SnowIcon() {
  return (
    <motion.div
      variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
      className="h-[60px] mt-auto "
    >
      <div className={styles.snow}>
        <div className={styles.f}></div>
      </div>
    </motion.div>
  );
}
