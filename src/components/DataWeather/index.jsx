import React from "react";

function DataWeather({ humidity, pressure, feels }) {
  return (
    <div>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
      <p>Feels Like: {feels}</p>
    </div>
  );
}

export default DataWeather;
