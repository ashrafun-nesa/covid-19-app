import "./Livereport.css";
import Livedata from "./Livedata.js";
import React, { useState } from "react";
export default function Livereport() {
  const [countries, setCountries] = useState([]);

  const [percentage, setPercentage] = useState([
    "16%",
    "8%",
    "5%",
    "5%",
    "4%",
    "1%",
    "8%",
    "5%",
    "5%",
    "4%",
    "45%",
    "16%",
    "8%",
    "5%",
    "54%",
    "45%",
    "16.%",
    "8%",
    "5%",
    "55%",
    "45%",
    "49%",
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
      console.log(countries);

      // country.forEach((element) => {
      //     console.log(element.Country)

      //     // <Card color="#8a72be" value={countries} effect={percentage[0]} />
      // });
    })
    .catch((err) => console.error(err));

  return countries.length > 1 ? (
    <div className="live-report">
      <h6>Live reports</h6>
      <div className="live-data">
        <Livedata
          data={countries[0]}
          effect={percentage[0]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[1]}
          effect={percentage[1]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[2]}
          effect={percentage[2]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[3]}
          effect={percentage[3]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[4]}
          effect={percentage[4]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[5]}
          effect={percentage[5]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[6]}
          effect={percentage[6]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          
        />
        <Livedata
          data={countries[7]}
          effect={percentage[7]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[8]}
          effect={percentage[8]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[9]}
          effect={percentage[9]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[10]}
          effect={percentage[10]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[11]}
          effect={percentage[11]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[12]}
          effect={percentage[12]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[13]}
          effect={percentage[13]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[14]}
          effect={percentage[14]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[15]}
          effect={percentage[15]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[16]}
          effect={percentage[16]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[17]}
          effect={percentage[17]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[18]}
          effect={percentage[18]}
          class="bi bi-arrow-up"
          fill="#5C5AFC"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
        <Livedata
          data={countries[19]}
          effect={percentage[19]}
          class="bi bi-arrow-down"
          fill="#00CD98"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
        <Livedata
          data={countries[20]}
          effect={percentage[20]}
          class="bi bi-arrow-down"
          fill="#EF8655"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </div>
    </div>
  ) : null;
}
