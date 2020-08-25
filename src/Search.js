import React from "react";

export default function Search() {
  return (
    <div className="search-container">
      <input
        type="search"
        className="form-control"
        placeholder="Enter City Here"
        id="city-input"
        autocomplete="off"
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
  );
}
