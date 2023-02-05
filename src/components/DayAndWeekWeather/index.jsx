import React from "react";
import HourWeather from "./HourWeather";
import WeekWeather from "./WeekWeather";

function index(data) {
  return (
    <div>
      {data.data && <HourWeather data={data.data.list} />}
      {data.data && <WeekWeather data={data.data.list} />}
    </div>
  );
}

export default index;
