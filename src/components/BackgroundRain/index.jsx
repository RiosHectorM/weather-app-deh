import React from "react";
import styles from "./BackgroundRain.module.css";
import { motion } from "framer-motion";
import { zoomInBG } from "../../constants/motion";


function BackgroundRain() {
  return (
    <motion.div
      variants={zoomInBG(0.3, 2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-t from-cyan-200 via-blue-300 to-gray-400 fixed h-full w-full -z-10">
      
      <div className={styles.container}>
        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BackgroundRain;
