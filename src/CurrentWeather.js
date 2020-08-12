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
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <Units />
        <City city={weatherData.city} />
        <DayTime date={weatherData.date} />
        <WeatherDescription description={weatherData.description} />
        <CurrentTemperature temperature={weatherData.temperature} />
        <IconAndDetails
          feelsLike={weatherData.feelsLike}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
        />
        <Search />
      </div>
    );
  } else {
    let apiKey = "8cf2c4837407c5b40baa70eb9a2a5711";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading...`;
  }
}
