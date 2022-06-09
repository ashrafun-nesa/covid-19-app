// C:\Users\user\my-app\node_modules\bootstrap\dist\css\bootstrap.min.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

export default function Card(props) {
  const percent1 = Math.round((props.data.TotalDeaths/props.data.TotalConfirmed)*100)
  console.log(percent1)
  return (
    <div className="border-style ">
      <div className="circle-percentage">
        <CircularProgressbar
          styles={{ path: { stroke: props.color } }}
          value={percent1}
          text={`${percent1}%`}
        />
      </div>
      <h7 className="country-name">{props.data.Country}</h7>
      <div className="effected">
        <div>
          <p style={{color :'gray'}}><small>Confirmed</small></p>
          <p>{props.data.TotalConfirmed}</p>
          
        </div>
        <div>
          <p style={{color :'gray'}}>Recovered</p>
          <p>{props.data.TotalRecovered}</p>
        </div>
        <div>
          <p style={{color :'gray'}}>Death</p>
          <p>{props.data.TotalDeaths}</p>
        </div>
      </div>
    </div>
  );
}
