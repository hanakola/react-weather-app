import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature row">
        <div className="col">
          <span className="current-temperature">
            {Math.round(props.celsius)}°
          </span>
          <span className="units">
            <span className="shown-unit-c">C</span>
            <button className="fahrenheit-button" onClick={convertToFahrenheit}>
              F
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature row">
        <div className="col">
          <span className="current-temperature">
            {Math.round(fahrenheit())}°
          </span>
          <span className="units">
            <span className="shown-unit-f">F</span>
          </span>
          <button className="celsius-button" onClick={convertToCelsius}>
            C
          </button>
        </div>
      </div>
    );
  }
}
