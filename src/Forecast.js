import React, { useState } from "react";
import axios from "axios";
import ForecastItem from "./ForecastItem";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastItem data={forecast.list[0]} />
          <ForecastItem data={forecast.list[1]} />
          <ForecastItem data={forecast.list[2]} />
        </div>
        <br />
        <div className="row">
          <ForecastItem data={forecast.list[3]} />
          <ForecastItem data={forecast.list[4]} />
          <ForecastItem data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "8cf2c4837407c5b40baa70eb9a2a5711";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
