import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";

import "./Map.css";

export default function Map() {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const [content, setContent] = useState("");
  return (
    <div
      className="Map"
      style={{
        width: "100%",
        height: "100%",
        dispaly: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "400px" , fill : "#8AAACF"}}>
        <ComposableMap data-tip="">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
