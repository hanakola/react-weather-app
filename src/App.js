import React from "react";
import Units from "./Units";
import City from "./City";
import DayTime from "./DayTime";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Units />
        <City />
        <DayTime />
      </div>
    </div>
  );
}
