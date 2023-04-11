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
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div id="body">
      <MyName />
      <AboutMe />
      <div className="header-wrapper">
        <h1
          className="header"
          data-aos="slide-right"
          data-aos-delay="0"
          id="project"
          ref={aboutRef}
        >
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
        <h1 className="header" id="resume" ref={ref}>
          {/* <p>{isVisible ? "Visible" : "Not visible"}</p> */}
          Resume
        </h1>
      </div>
      <PDFRender />
      <ContactMe />
    </div>
  );
};

export default Body;
