import React from "react";
import "./Units.css";

export default function Units() {
  return (
    <div className="row">
      <div className="col">
        <a href="/" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit-link">
          °F
        </a>
      </div>
    </div>
  );
}
