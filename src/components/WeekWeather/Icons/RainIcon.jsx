import React from "react";
import styles from "../WeekWeather.module.css";

function RainIcon() {
  return (
    <div className="my-auto w-[100px] ">
      <div className={`${styles.cloud} flex justify-center m-auto`}>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
        <div className={styles.rain}></div>
      </div>
    </div>
  );
}

export default RainIcon;
