import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Containercard.css'

export default function Containercard(props) {
  return (
    <div className="percentage-card">
      <h5>{props.value}</h5>
      <small style={{ color: "gray" }}>{props.situation}</small>
      <div className="percentage-arrow">
      <span>{props.arrow}</span>
      <p style={{color : props.color}}>{props.percentage}</p>
      </div>
    </div>
  );
}
