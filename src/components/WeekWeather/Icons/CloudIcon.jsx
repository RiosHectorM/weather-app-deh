import React from 'react'
import styles from "../WeekWeather.module.css";

function CloudIcon() {
  return (
    <div className={styles.weathercloud}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
    </div>
  );
}

export default CloudIcon