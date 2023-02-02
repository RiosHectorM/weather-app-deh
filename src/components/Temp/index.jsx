import React from "react";

function Temp({ temp, max, min }) {
  return (
    <div>
      <p> Temp: {temp}</p>
      <p> Temp Max: {max}</p>
      <p> Temp Min: {min}</p>
    </div>
  );
}

export default Temp;
