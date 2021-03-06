import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import DayTime from "./DayTime";
import WeatherDescription from "./WeatherDescription";
import CurrentTemperature from "./CurrentTemperature";
import IconAndDetails from "./IconAndDetails";
import Forecast from "./Forecast";
import Loading from "./Loading";

import "./SearchEngine.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "8cf2c4837407c5b40baa70eb9a2a5711";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //Current location
  function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "8cf2c4837407c5b40baa70eb9a2a5711";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <City city={weatherData.city} />
        <DayTime date={weatherData.date} />
        <WeatherDescription description={weatherData.description} />
        <CurrentTemperature celsius={weatherData.temperature} />
        <IconAndDetails
          icon={weatherData.icon}
          feelsLike={weatherData.feelsLike}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
        />
        <div className="SearchEngine row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                className="search-city"
                onChange={handleCityChange}
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search" />
              </button>
              <button className="location-button" onClick={getCurrentPosition}>
                <i className="fas fa-map-marker-alt" />
              </button>
            </form>
          </div>
        </div>
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();

    return <Loading />;
  }
}
