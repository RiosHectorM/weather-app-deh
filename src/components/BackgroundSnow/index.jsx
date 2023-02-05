import React from "react";
import styles from "./BackgroundSnow.module.css";
import { motion } from "framer-motion";
import { zoomInBG } from "../../constants/motion";


function BackgroundSnow() {
  return (
    <motion.div
      variants={zoomInBG(0.3, 2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-t from-teal-100 via-blue-400 to-blue-900 fixed h-full w-full -z-10"
    >
      <div className={styles.more} id="container">
        asdasd
      </div>
    </motion.div>
  );
}

export default BackgroundSnow;
