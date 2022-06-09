// import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Container2.css'
import React from "react";
import Worldmap from './Worldmap.js';
import Livereport from './Livereport.js';
//C:\Users\CodeRex\covid-19-app\node_modules\bootstrap\dist\css\bootstrap.min.css
export default function Container2() {
  return (
    <div className="container2">
      <div className="map-col col-7">
        <Worldmap/>
      </div>
      <div className="live-col col-4"><Livereport/></div>
    </div>
  );
}