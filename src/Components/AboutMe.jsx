import React from "react";
import "../CSS/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      <h1 data-aos="slide-right" data-aos-delay="100">
        About Me
      </h1>

      <div className="about-me-desc">
        <h3 data-aos="fade-right" data-aos-delay="100">
          Developer that loves learning new technologies and building new
          projects.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
