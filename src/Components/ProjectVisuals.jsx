import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image } from "antd";

const ProjectVisuals = ({ projectScreenShots }) => {
  useEffect(() => {
    Aos.init();
  }, []);
//Screen resoultion on mac is 1470 by 800
  return (
    <div className="product-visuals-container hide-on-mobile">
      <div className="project-visuals-top-sc">
        <Image.PreviewGroup>
          <Image
            src={projectScreenShots.mobile}
            alt="iphone screenshot"
            className="project-visuals-iphone"
            data-aos="zoom-in-up"
          />
          <div className="desktop-pic-1">
            <Image
              src={projectScreenShots.desktop1}
              className="desktop-sc desktop-pic-1"
              alt="desktop screenshot"
              data-aos="slide-left"
            />
          </div>
        </Image.PreviewGroup>
      </div>

      <div className="project-visuals-bot-sc">
        <Image
          src={projectScreenShots.desktop2}
          className="desktop-sc desktop-sc-2"
          alt="desktop screenshot"
          data-aos="flip-up"
        />
      </div>
    </div>
  );
};

export default ProjectVisuals;
