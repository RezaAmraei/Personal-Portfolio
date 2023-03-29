import React, { useState, useEffect } from "react";
import "../CSS/myName.css";

import Aos from "aos";
import "aos/dist/aos.css";

const MyName = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="intro-text-container">
        <div className="fading-text-container">
          <span className="fade-in-text" data-aos="slide-right">
            My name is Reza!
          </span>
        </div>
        <h2 data-aos="slide-right">FullStack Developer && Software Engineer</h2>
      </div>
    </>
  );
};

export default MyName;
