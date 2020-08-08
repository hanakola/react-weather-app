import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast row">
      {props.day}
      <br />
      {props.temp}°
    </div>
  );
}
