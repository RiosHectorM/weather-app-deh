import React from 'react'
import styles from "../WeekWeather.module.css";


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
