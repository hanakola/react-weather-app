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
            <h2>{Math.round(props.celsius)}°</h2>
          </span>
          <span className="units">
            °C |{" "}
            <a href="/" id="fahrenheit-link" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature row">
        <div className="col">
          <span className="current-temperature">
            <h2>{Math.round(fahrenheit())}°</h2>
          </span>
          <span className="units">
            <a href="/" id="celsius-link" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
