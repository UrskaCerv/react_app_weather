import React from "react";
import "./App.css";
import Weather from "./Weather";
<link
  href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&amp;display=swap"
  rel="stylesheet"
></link>;

export default function App() {
  return (
    <div className="weather-app">
      <Weather defaultCity="Ljubljana" />

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
