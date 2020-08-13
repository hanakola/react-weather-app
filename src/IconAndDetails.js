import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./IconAndDetails.css";

export default function IconAndDetails(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "SLEET",
    "10n": "SLEET",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <div className="IconAndDetails row">
      <div className="col-2"></div>
      <div className="col-4 CurrentIcon">
        <ReactAnimatedWeather
          icon={codeMapping[props.icon]}
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
