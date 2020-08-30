import React from "react";
import "./Timestamp.css";

export default function Timestamp() {
  let timeData = {
    day: "Monday, August 24",
    time: "18:05",
  };
  return (
    <div className="Timestamp">
      <p>
        Last updated:
        <br />
        {timeData.day}
        <br />
        {timeData.time}
      </p>
    </div>
  );
}
