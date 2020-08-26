import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import axios from "axios";

export default function weather() {
  const apiKey = "d643ee59f43b44ad31e57464532264d8";
  let city = "London";
  let apiURL = `http://api.openweahtermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  return (
    <div>
      <div class="row">
        <div className="col">
          <Logo />
        </div>
        <div className="col">
          <ul className="temp">
            <span className="temperature"> 76 </span>
            <span className="unit">
              <sup>
                <a href="#" id="farenheit-link" className="active">
                  °F
                </a>{" "}
                |
                <a href="#" id="celsius-link">
                  °C{" "}
                </a>
              </sup>
            </span>
            <p className="current-weather">
              Updated: January 31st
              <br />
              Humidity: 68%
              <br />
              Wind: 18 mph
              <br />
              Clear Sky
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
