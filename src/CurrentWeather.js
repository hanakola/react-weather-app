import React, { useState } from "react";
import axios from "axios";
import Units from "./Units";
import City from "./City";
import DayTime from "./DayTime";
import WeatherDescription from "./WeatherDescription";
import CurrentTemperature from "./CurrentTemperature";
import IconAndDetails from "./IconAndDetails";
import Search from "./Search";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <Units />
        <City />
        <DayTime date={weatherData.date} />
        <WeatherDescription />
        <CurrentTemperature />
        <IconAndDetails />
        <Search />
      </div>
    );
  } else {
    let apiKey = "8cf2c4837407c5b40baa70eb9a2a5711";
    let city = "Edinburgh";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading...`;
  }
}
