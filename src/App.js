import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Edinburgh" />
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
