import "./Worldmap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./Map.js";
import React from "react";
export default function Worldmap() {
  return (
    <div>
      <div className="covid-map">
        <h5>Covid 19</h5>
        <small style={{ color: "darkgray" }}>-Affected Areas on Italy</small>
        <div class="form-check form-check-inline check">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            style={{ display: "block", background: "#8AAACF" }}
          ></input>
          <label class="form-check-label" for="inlineRadio1">
            Most affected
          </label>
        </div>
        <div class="form-check form-check-inline check">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            style={{ display: "block", background: "#F09670" }}
          ></input>
          <label class="form-check-label" for="inlineRadio2">
            Less affected
          </label>
        </div>
      </div>
      <div className="map-view">
        <Map />
      </div>
    </div>
  );
}
