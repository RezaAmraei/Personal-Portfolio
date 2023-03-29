import React from "react";
import { ProjectDetails, ProjectVisuals } from "../Components";
import "../CSS/displayProject.css";
const DisplayProject = () => {
  return (
    <div className="project-container">
      <ProjectDetails />
      <ProjectVisuals />
    </div>
  );
};

export default DisplayProject;
