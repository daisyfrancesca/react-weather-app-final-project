import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";
import Styles from "./Styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col">
        <ul className="temp">
          <h4 className="current-city">{props.data.city}</h4>
          <span className="temperature"> {Math.round(props.data.temp)} </span>
          °F
          <br />
          <span className="weather-icon">
            <WeatherIcon code={props.data.icon} />
          </span>
          <br />
          <p className="current-weather">
            <UpdatedDate date={props.data.date} />
            <br />
            Low: {Math.round(props.data.low)}°F
            <br />
            High: {Math.round(props.data.high)}°F
            <br />
            Humidity: {props.data.humidity}%
            <br />
            Wind: {props.data.wind} mph
            <br />
            <span className="text-capitalize">{props.data.description}</span>
          </p>
        </ul>
      </div>
    </div>
  );
}
