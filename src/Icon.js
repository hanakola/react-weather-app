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
    <div>
      <div className="Icon">
        <ReactAnimatedWeather
          icon={codeMapping[props.icon]}
          color="#212529"
          size={55}
          animate={true}
        />
      </div>
    </div>
  );
}
