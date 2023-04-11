import React from "react";
import "../CSS/header.css";

const Header = () => {
  return (
    <div id="header">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
