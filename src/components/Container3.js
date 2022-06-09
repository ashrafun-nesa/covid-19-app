import "./Container3.css";
import Chartbar from "./Chartbar.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Container3() {
  const percentage = 30;
  return (
    <div className="container3">
      <div className="row container3area">
        <div className="col-7 bar-area">
          <div className="graph-bar">
            <div className="recover-show">
              <span className="recover">Recovery Overview</span>
              <span className="show">Show</span>
              <select className="month">
                  <option>By months</option>
                  <option>By week</option>
              </select>
              {/* <span className="month">By months</span> */}
            </div>
            <Chartbar />
          </div>
        </div>
        <div className=" col-5 circle-percent2">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{ path: { stroke: "#5C5AFC" } }}
          />
          <ul className="death-recover">
              <li className="death">Death</li>
              <li className="recovered">Recovered</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
