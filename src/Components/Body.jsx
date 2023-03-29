import React, { useEffect } from "react";
import { MyName, AboutMe, DisplayProject } from "../Components";
import Aos from "aos";
import "aos/dist/aos.css";
import "../CSS/body.css";

const Body = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="body">
      <MyName />
      <AboutMe />
      <div id="project-header-wrapper">
        <h1 id="project-header" data-aos="slide-right" data-aos-delay="0">
          Projects
        </h1>
      </div>
      <DisplayProject />
    </div>
  );
};

export default Body;
