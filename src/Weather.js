import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Logo } from "./logo.svg";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  // Declare state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  //associated function
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 2.237),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      low: response.data.main.temp_min,
      high: response.data.main.temp_max,
    });
  }

  function search() {
    const apiKey = "d643ee59f43b44ad31e57464532264d8";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  //submit function
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //if else statement for API call
  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              type="search"
              className="form-control"
              placeholder="Enter City Here"
              id="city-input"
              autocomplete="off"
              onChange={handleCityChange}
            />

            <button type="submit" className="button" id="button">
              Submit
            </button>
            <button type="button" class="button" id="currentbtn">
              <span role="img" aria-label="pinpoint">
                {" "}
                📍
              </span>
            </button>
          </div>
        </form>
        <div class="row">
          <div className="col">
            <Logo />
          </div>
          <WeatherInfo data={weatherData} />
        </div>
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
