import React, { useEffect } from "react";
import {
  TwitterMobile,
  TwitterDesktop,
  TwitterDesktop2,
  EcommerceMobile,
  EcommerceDesktop,
  EcommerceDesktop2,
} from "../Images";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image } from "antd";

const ProjectVisuals = ({ projectScreenShots }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const images = {
    "twitter-mobile": TwitterMobile,
    "twitter-desktop-1": TwitterDesktop,
    "twitter-desktop-2": TwitterDesktop2,
    "ecommerce-mobile": EcommerceMobile,
    "ecommerce-desktop-1": EcommerceDesktop,
    "ecommerce-desktop-2": EcommerceDesktop2,
  };
  return (
    <div className="product-visuals-container">
      <div className="project-visuals-top-sc">
        <Image.PreviewGroup>
          <Image
            src={images[projectScreenShots[0]]}
            alt="iphone screenshot"
            className="project-visuals-iphone"
            data-aos="zoom-in-up"
            width={350}
          />
          <div className="desktop-pic-1">
            <Image
              src={images[projectScreenShots[1]]}
              className="desktop-sc desktop-pic-1"
              alt="desktop screenshot"
              data-aos="slide-left"
              width={750}
              height={700}
            />
          </div>
        </Image.PreviewGroup>
      </div>

      <div className="project-visuals-bot-sc">
        <Image
          src={images[projectScreenShots[2]]}
          className="desktop-sc desktop-sc-2"
          alt="desktop screenshot"
          data-aos="flip-up"
          width={750}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProjectVisuals;
