import React from "react";
import Units from "./Units";
import City from "./City";
import DayTime from "./DayTime";
import WeatherDescription from "./WeatherDescription";
import CurrentTemperature from "./CurrentTemperature";
import IconAndDetails from "./IconAndDetails";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Units />
        <City />
        <DayTime />
        <WeatherDescription />
        <CurrentTemperature />
        <IconAndDetails />
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
