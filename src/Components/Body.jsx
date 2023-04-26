import React, { useEffect, useRef } from "react";
import {
  MyName,
  AboutMe,
  DisplayProject,
  PDFRender,
  ContactMe,
} from "../Components";
import { useIsVisible, ProjectData } from "../Utils";
import Aos from "aos";
import "aos/dist/aos.css";
import "../CSS/body.css";

const Body = ({ aboutRef }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="body">
      <MyName />
      <AboutMe />
      <div className="header-wrapper">
        <h1 className="headers" data-aos="fade-right" id="project">
          Projects
        </h1>
      </div>
      <div>
        <DisplayProject
          projectDetails={ProjectData.twitter}
          projectScreenShots={ProjectData.twitter.images}
        />
        <DisplayProject
          projectDetails={ProjectData.ecommerce}
          projectScreenShots={ProjectData.ecommerce.images}
        />
      </div>
      <div className="header-wrapper">
        <h1 className="headers" id="resume" data-aos="slide-right">
          Resume
        </h1>
      </div>
      <PDFRender />
      <div className="header-wrapper">
        <h1 className="headers" id="contact" data-aos="slide-right">
          Contact Me
        </h1>
      </div>
      <ContactMe />
    </div>
  );
};

export default Body;
