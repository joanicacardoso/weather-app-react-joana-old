import React from "react";
import "./Current.css";
import Sun from "./img/01d.svg";

export default function Current() {
  let currentData = {
    temperature: 24,
    city: "Lisbon",
    description: "Sunny",
    img: "./img/01d.svg",
    humidity: 33,
    wind: 7,
  };
  return (
    <div className="Current">
      <img
        src={Sun}
        alt={currentData.description}
        height="120px"
        width="200px"
      />
      <p>{currentData.temperature}º</p>
      <p>{currentData.city}</p>
      <span>{currentData.description}</span>

      <div className="Conditions">
        Humidity: {currentData.humidity}%
        <br />
        Wind: {currentData.wind} km/h{" "}
      </div>
    </div>
  );
}
