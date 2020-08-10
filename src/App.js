import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather />
        <div className="Forecast">
          <Forecast day="WED" temp={20} />
          <Forecast day="THU" temp={22} />
          <Forecast day="FRI" temp={19} />
          <Forecast day="SAT" temp={17} />
        </div>
      </div>
      <div className="footer">
        <small>
          <a
            href="https://github.com/hanakola/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code on GitHub
          </a>{" "}
          by Hana Kolackova
        </small>
      </div>
    </div>
  );
}
