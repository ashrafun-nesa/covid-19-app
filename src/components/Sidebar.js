import React from "react";
import "./Sidebar.css";
import logo from "../navbar-images/logo.png";
import heart from "../navbar-images/heart.png";
import home from "../navbar-images/home.png";
import page from "../navbar-images/page.png";
import paper from "../navbar-images/paper.png";
import wave from "../navbar-images/wave.png";
import logout from "../navbar-images/logout.png";

export default function Sidebar() {
  return (
    <div className="nav-items">
      <div className="logo">
        <span>
          <img src={logo} alt=""></img>
        </span>
      </div>

      <div className="nav-icon">
        <a>
          <img src={home} alt=""></img>
        </a>
        <br></br>
        <a>
          <img src={paper} alt=""></img>
        </a>
        <br></br>
        <a>
          <img src={page} alt=""></img>
        </a>
        <br></br>
        <a>
          <img src={wave} alt=""></img>
        </a>
        <br></br>
        <a>
          <img src={heart} alt=""></img>
        </a>
        <br></br>
      </div>

      <div className="nav-logout">
        <img src={logout} alt=""></img>
      </div>
    </div>
  );
}
