import React from "react";
import styles from "./WeekWeather.module.css";

function WeekWeather() {
  return (
    <div className="flex">
      <h3>Week Weather</h3>
      <div>
        <div className="flex-1">1</div>
        <div className="flex-1">2</div>
        <div className="flex-1">3</div>
        <div className="flex-1">4</div>
        <div className="flex-1">5</div>
        <div className="flex-1">6</div>
        <div className="flex-1">7</div>
      </div>
    </div>
  );
}

export default WeekWeather;
