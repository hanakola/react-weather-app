import React from "react";
import Icon from "./Icon";

import "./IconAndDetails.css";

export default function IconAndDetails(props) {
  return (
    <div className="IconAndDetails row">
      <div className="col-2"></div>
      <div className="col-3">
        <Icon icon={props.icon} />
      </div>
      <div className="col-7 WeatherDetails">
        Feels like: {Math.round(props.feelsLike)}°
        <br />
        Humidity: {props.humidity}%
        <br />
        Wind: {Math.round(props.wind * 3.6)} km/h
      </div>
    </div>
  );
}
