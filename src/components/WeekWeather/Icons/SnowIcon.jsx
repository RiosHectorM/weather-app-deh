import React from "react";
import styles from "../WeekWeather.module.css";

export default function SnowIcon() {
  return (
    <div className="h-[60px] mt-auto ">
      <div className={styles.snow}>
        <div className={styles.f}></div>
      </div>
    </div>
  );
}
