import React, { useState } from "react";
import Card from "./Card.js";
import "./Rightbar.css";
import Doll from "../rightbar-images/cc.png";
export default function Rightbar() {
  const [countries, setCountries] = useState([]);

  const [percentage, setPercentage] = useState([
    "16.14",
    "8.09",
    "5.82",
    "5.54",
    "4.95",
  ]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    },
  };

  fetch("https://api.covid19api.com/summary", options)
    .then((response) => response.json())
    .then((result) => {
      const country = result.Countries;

      country.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1));
      setCountries(country);

    })
    .catch((err) => console.error(err));
  return (countries.length > 0 ? (
    <div className="right-items">
      <div className="right-top">
        <h6>Affected top countries</h6>
        <Card color="#8a72be" data={countries[0]} effect={percentage[0]} />
        <Card color="tomato" data={countries[1]} effect={percentage[1]} />
        <Card color="#FFAE42" data={countries[2]} effect={percentage[2]} />
        <Card color="#77DD77" data={countries[3]} effect={percentage[3]} />
      </div>
      <div className="right-bottom">
        <p>What are the symptoms of someone infected with a coronavirus?</p>
        <span className="circle"></span>
        <img className="rec-image" src={Doll} alt=""></img>
      </div>
    </div>
  ) : null);
}
