import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row" id="description">
        <p>
          <div>
            <strong id="city">
              {props.data.city}, {props.data.country}
            </strong>
            <strong id="country"></strong>
          </div>
        </p>
      </div>
      <div className="row" id="last-updated">
        <p>
          Last updated: &nbsp; <FormattedDate date={props.data.date} />
          <div id="location-and-time"></div>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6" id="temperature">
              {props.data.temperature}°
            </div>
            <div className="col-6" id="choose">
              <a href="/" id="celsius">
                c
              </a>{" "}
              |{" "}
              <a href="/" id="fahrenheit">
                f
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul>
                <li id="description-weather">{props.data.description}</li>
                <li> Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
