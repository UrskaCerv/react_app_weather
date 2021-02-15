import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="weather-app">
      <div className="green">
        <Weather defaultCity="Ljubljana" />
      </div>
      <div className="graphic">
        <img src="/img/green-01.png" alt="graphic" />
      </div>
      <div className="white">
        <Forecast />
      </div>
      <div className="signature">
        <small>
          <a
            href="https://github.com/UrskaCerv/react_app_weather"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Urska Cerv
        </small>
      </div>
    </div>
  );
}
