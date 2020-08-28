import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Logo } from "./logo.svg";

export default function WeatherForecast(props) {
  // Declare state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  //associated function
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 2.237),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Wednesday",
      low: response.data.main.temp_min,
      high: response.data.main.temp_max,
    });
  }
  //if else statement for API call
  if (weatherData.ready) {
    return (
      <div>
        <div class="row">
          <div className="col">
            <Logo />
          </div>
          <div className="col">
            <ul className="temp">
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </span>
              °F
              <br />
              <span className="weather-icon">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                ></img>
              </span>
              <br />
              <p className="current-weather">
                Updated: {weatherData.date}
                <br />
                Low: {weatherData.low}°F
                <br />
                High: {weatherData.high}°F
                <br />
                Humidity: {weatherData.humidity}%
                <br />
                Wind: {weatherData.wind} mph
                <br />
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d643ee59f43b44ad31e57464532264d8";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
