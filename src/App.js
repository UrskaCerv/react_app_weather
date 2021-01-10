import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="weather-app">
      <div className="green">
        <Weather />
      </div>
      <div className="graphic">
        <img src="/img/green-01.png" alt="graphic" />
      </div>
      <div className="white">
        <Forecast />
        <div className="row" id="forecast"></div>
      </div>
    </div>
  );
}
