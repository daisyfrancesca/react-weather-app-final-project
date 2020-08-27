import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Styles from "./Styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather in Your City</h1>
        <Search />
        <Weather defaultCity="New York" />
      </div>

      <footer>
        <a
          href="https://github.com/daisyfrancesca/react-weather-app-final-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Open Source Code</span>
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/daisyfrancesca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Created by Daisy Simpson</span>
        </a>
      </footer>
    </div>
  );
}
