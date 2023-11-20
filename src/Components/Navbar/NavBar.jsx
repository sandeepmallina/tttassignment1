import React from "react";
import "./NavBar.css";

import tttlogo from "../../assets/tttlogo.jpg";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-container">
            <img className="nav-logo" src={tttlogo} alt="" srcset="" />
            <div className="nav-page-line"></div>
            <span className="nav-page">STORIES</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">Courses</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
