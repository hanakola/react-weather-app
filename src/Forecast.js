import React, { useState } from "react";
import axios from "axios";
import Icon from "./Icon";

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
      <div className="Forecast row">
        <div className="col-2 forecast-item">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <Icon icon={forecast.list[0].weather[0].icon} />
          {Math.round(forecast.list[0].main.temp)}°
        </div>

        <div className="col-2 forecast-item">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <Icon icon={forecast.list[1].weather[0].icon} />
          {Math.round(forecast.list[1].main.temp)}°
        </div>

        <div className="col-2 forecast-item">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <Icon icon={forecast.list[2].weather[0].icon} />
          {Math.round(forecast.list[2].main.temp)}°
        </div>

        <div className="col-2 forecast-item">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <Icon icon={forecast.list[3].weather[0].icon} />
          {Math.round(forecast.list[3].main.temp)}°
        </div>

        <div className="col-2 forecast-item">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <Icon icon={forecast.list[4].weather[0].icon} />
          {Math.round(forecast.list[4].main.temp)}°
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
