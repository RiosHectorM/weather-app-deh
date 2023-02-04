import React from "react";
import styles from "../WeekWeather.module.css";

export default function CloudAndSun() {
  return (
    <div className="h-[100px]">
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
    </div>
  );
}
