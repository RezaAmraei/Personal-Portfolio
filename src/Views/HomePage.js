import React from "react";
import { SpinningName } from "../Components";
import "../CSS/HomePage.css";
const HomePage = () => {
  console.log(2 + 2);
  return (
    <div id="home-page-container">
      <div id="header">
        <h1>header</h1>
      </div>

      <div id="body">
        <h1>hello</h1>
        <SpinningName />
      </div>

      <div id="footer">
        <h1>Fotter</h1>
      </div>
    </div>
  );
};

export default HomePage;
