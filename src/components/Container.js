import "./Container.css";
import Containercard from "./Containercard.js";
import React from "react";
import Chartapp from "./Chartapp";
import { useState } from "react";

export default function Container() {
  const [global, setGlobal] = useState(''); 
  const [confirmed, setConfirmed] = useState(''); 
  const [recover, setRecover] = useState(''); 
  const [death, setDeath] = useState(''); 

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
      const glob = result.Global;

      setGlobal(glob);
      
      setConfirmed(global.TotalConfirmed);
      setRecover(global.TotalRecovered);
      setDeath(global.TotalDeaths)

      // country.forEach((element) => {
      //     console.log(element.Country)

      //     // <Card color="#8a72be" value={countries} effect={percentage[0]} />
      // });
    })
    .catch((err) => console.error(err));

  return (
    <div className="row container1">
      <div className="col col-2">
        <Containercard
          value={confirmed}
          situation="CORONAVIRUS CASES"
          arrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#00CD98"
              class="bi bi-arrow-down-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"
              />
            </svg>
          }
          percentage="+5.49%"
          color="#00CD98"
        />
        <Chartapp />
      </div>
      <div className="col col-2">
        <Containercard
          value={recover}
          situation="RECOVERED "
          arrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#00CD98"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          }
          percentage="+79%"
          color="#00CD98"
        />
      </div>
      <div className="col col-2">
        <Containercard
          value='58,650'
          situation="MILD CONDITION"
          arrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#F9C951"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          }
          percentage="+95%"
          color="#F9C951"
        />
      </div>
      <div className="col col-2">
        <Containercard
          value={death}
          situation="DEATH"
          arrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#F9C951"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          }
          percentage="+21%"
          color="#F9C951"
        />
      </div>
      <div className="col col-2">
        <Containercard
          value='45,586'
          situation="CRITICAL"
          arrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#F9C951"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          }
          percentage="+5%"
          color="#F9C951"
        />
      </div>
    </div>
  );
}
