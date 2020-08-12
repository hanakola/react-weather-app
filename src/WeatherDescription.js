import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription row">
      <div className="col">{props.description}</div>
    </div>
  );
}
