import React from "react";
import { ProjectDetails, ProjectVisuals } from "../Components";
import "../CSS/displayProject.css";
const DisplayProject = ({ projectDetails }) => {
  return (
    <div className="project-container">
      <ProjectDetails projectDetails={projectDetails} />
      <ProjectVisuals />
    </div>
  );
};

export default DisplayProject;
