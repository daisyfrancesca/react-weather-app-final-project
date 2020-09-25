import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

//layout image to the left and weather information on the right

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="temp">
        <h4 className="current-city">{props.data.city}</h4>
        <WeatherTemp farenheit={props.data.temp} />
        <span className="weather-icon">
          <WeatherIcon code={props.data.icon} />
        </span>
        <br />
        <p className="current-weather">
          <UpdatedDate date={props.data} />
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
  );
}
