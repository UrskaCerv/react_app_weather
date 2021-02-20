import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="row WeatherTemperature">
        <div className="col-6" id="temperature">
          {props.celsius}°
        </div>
        <div className="col-6" id="choose">
          <a href="/" id="celsius">
            c
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToF} id="fahrenheit">
            f
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="col-6" id="temperature">
          {Math.round(fahrenheit)}°
        </div>
        <div className="col-6" id="choose">
          <a href="/" onClick={convertToC} id="celsius">
            c
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToF} id="fahrenheit">
            f
          </a>
        </div>
      </div>
    );
  }
}
