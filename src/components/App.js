import Sidebar from "./Sidebar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import Container from "./Container";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Rightbar from "./Rightbar";
import Map from "./Map.js";
function App() {
  return (
    <div className="App">
       <div className="navbar">
        <Sidebar />
      </div>
      <div className="dash-board">
        <div>
          <Container />
        </div>
        <div>
          <Container2 />
        </div>
        <div>
          <Container3 />
        </div>
      </div>
      <div className="right-bar">
        <Rightbar/>
      </div>
      
    </div>
  );
}

export default App;
