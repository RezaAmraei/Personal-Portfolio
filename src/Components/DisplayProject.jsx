import React from "react";
import { ProjectDetails, ProjectVisuals } from "../Components";
import {
  TwitterMobile,
  TwitterDesktop,
  TwitterDesktop2,
  EcommerceMobile,
  EcommerceDesktop,
  EcommerceDesktop2,
} from "../Images";
import "../CSS/displayProject.css";

const DisplayProject = ({ projectDetails, projectScreenShots }) => {
  const images = {
    "twitter-mobile": TwitterMobile,
    "twitter-desktop-1": TwitterDesktop,
    "twitter-desktop-2": TwitterDesktop2,
    "ecommerce-mobile": EcommerceMobile,
    "ecommerce-desktop-1": EcommerceDesktop,
    "ecommerce-desktop-2": EcommerceDesktop2,
  };
  const imagesInObject = {
    mobile: images[projectScreenShots.mobile],
    desktop1: images[projectScreenShots.desktop1],
    desktop2: images[projectScreenShots.desktop2],
  };
  return (
    <div className="project-container">
      <ProjectDetails projectDetails={projectDetails} />
      <ProjectVisuals projectScreenShots={imagesInObject} />
    </div>
  );
};

export default DisplayProject;
