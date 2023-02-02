import React from "react";

function Time() {
  let hour = new Date().toString();
  return <div>Time: {hour}</div>;
}

export default Time;
