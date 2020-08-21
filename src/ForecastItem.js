import React from "react";
import Icon from "./Icon";

import "./Forecast.css";

export default function ForecastItem(props) {
  return (
    <div className="col-4 ForecastItem">
      {new Date(props.data.dt * 1000).getHours()}:00
      <Icon icon={props.data.weather[0].icon} />
      {Math.round(props.data.main.temp)}°
    </div>
  );
}
