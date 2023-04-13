import React from "react";
import { ProjectDetails, ProjectVisuals } from "../Components";
import "../CSS/displayProject.css";
const DisplayProject = ({ projectDetails, projectScreenShots }) => {
  return (
    <div className="project-container">
      <ProjectDetails projectDetails={projectDetails} />
      <ProjectVisuals projectScreenShots={projectScreenShots} />
    </div>
  );
};

export default DisplayProject;
