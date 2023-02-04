import React from 'react'
import styles from "../WeekWeather.module.css";

//<div className={`${styles.sun} h-[${size.height}] w-[${size.width}] `}></div>

export default function SunIcon() {
  return (
    <div className={styles.weathersun}>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
        <div className={styles.rays}></div>
      </div>
    </div>
  );
}
