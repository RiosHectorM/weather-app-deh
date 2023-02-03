import React from "react";
import styles from "./BackgroundCloud.module.css";

function BackgroundCloud() {
  return (
    <div className="bg-gradient-to-r from-cyan-100 via-sky-500 to-blue-700 fixed h-full w-full -z-10">
      <div id="clouds">
        <div className={`${styles.cloud} ${styles.x1}`}></div>
        <div className={`${styles.cloud} ${styles.x2}`}></div>
        <div className={`${styles.cloud} ${styles.x3}`}></div>
        <div className={`${styles.cloud} ${styles.x4}`}></div>
        <div className={`${styles.cloud} ${styles.x5}`}></div>
      </div>
    </div>
  );
}

export default BackgroundCloud;
