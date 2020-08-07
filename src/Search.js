import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search row">
      <div className="col">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
            className="search-city"
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
}
