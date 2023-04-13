import React from "react";
import { Header, Body, ParticlesJS } from "../Components";
import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <div id="home-page-container">
      <ParticlesJS />
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
