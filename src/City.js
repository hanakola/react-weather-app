import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City row">
      <div className="col">
        <h1>{props.city}</h1>
      </div>
    </div>
  );
}
