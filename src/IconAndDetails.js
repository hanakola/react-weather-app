import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./IconAndDetails.css";

export default function IconAndDetails(props) {
  return (
    <div className="IconAndDetails row">
      <div className="col-2"></div>
      <div className="col-4 CurrentIcon">
        <ReactAnimatedWeather
          icon="SLEET"
          color="#212529"
          size={70}
          animate={true}
        />
      </div>
      <div className="col-6 WeatherDetails">
        Feels like: {Math.round(props.feelsLike)}°
        <br />
        Humidity: {props.humidity}%
        <br />
        Wind: {Math.round(props.wind * 3.6)} km/h
      </div>
    </div>
  );
}
