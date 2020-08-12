import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature row">
      <div className="col">
        <h2>{Math.round(props.temperature)}°</h2>
      </div>
    </div>
  );
}
