import React from 'react'
import HourWeather from "./HourWeather";
import WeekWeather from "./WeekWeather";

function index() {
  return (
    <div>
      <HourWeather />
      <WeekWeather />
    </div>
  )
}

export default index