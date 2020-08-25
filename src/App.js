import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import { ReactComponent as Logo } from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather in Your City</h1>
        <Search />
        <div className="columns">
          <div className="col-md-6">
            <Logo />
          </div>
          <div className="col-md-6" />
        </div>
        <Weather />
      </div>
      <footer>
        <a
          href="https://github.com/daisyfrancesca/react-weather-app-final-project"
          target="_blank"
        >
          <p>Open Source Code</p>
        </a>
        <a href="https://www.linkedin.com/in/daisyfrancesca/" target="_blank">
          <p>Created by Daisy Simpson</p>
        </a>
      </footer>
    </div>
  );
}
