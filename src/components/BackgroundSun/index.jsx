import React from "react";
import styles from "./BackgroundSun.module.css";

function BackgroundSnow() {
  return (
    <div className="bg-black fixed h-full w-full -z-10">
      <div className={styles.container}>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

export default BackgroundSnow;
