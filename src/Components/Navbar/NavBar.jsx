import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-container">
            <img
              className="nav-logo"
              src="https://i.pinimg.com/280x280_RS/45/13/ed/4513ede75c1139af511c64152c953907.jpg"
              alt=""
              srcset=""
            />
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
