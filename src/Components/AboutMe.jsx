import React from "react";
import "../CSS/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-wrapper" id="about">
      <h1 data-aos="slide-right" data-aos-delay="100">
        About Me
      </h1>

      <div className="about-me-desc">
        <h3 data-aos="fade-right" data-aos-delay="100">
          Developer that loves learning new technologies and building new
          projects. And when Im not focused on coding you'll find me playing
          video games and at the gym!
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
