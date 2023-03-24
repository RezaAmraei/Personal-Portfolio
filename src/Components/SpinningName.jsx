import React, { useEffect } from "react";
import "../CSS/spinningName.css";
import Aos from "aos";
import "aos/dist/aos.css";
const SpinningName = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="spinning-name-container">
      <h1>Hi</h1>
      <h1 data-aos="fade-right">hello</h1>
    </div>
  );
};

export default SpinningName;
