import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./IconAndDetails.css";

export default function IconAndDetails() {
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
        Humidity: 70%
        <br />
        Wind: 10 km/h
      </div>
    </div>
  );
}
