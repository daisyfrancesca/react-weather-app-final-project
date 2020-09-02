import React from "react";
import UpdatedDate from "./UpdatedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col">
        <ul className="temp">
          <p className="current-city">{props.data.city}</p>
          <span className="temperature"> {Math.round(props.data.temp)} </span>
          °F
          <br />
          <span className="weather-icon">
            <img src={props.data.iconUrl} alt={props.data.description}></img>
          </span>
          <br />
          <p className="current-weather">
            Updated: <UpdatedDate date={props.data.date} />
            <br />
            Low: {props.data.low}°F
            <br />
            High: {props.data.high}°F
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
