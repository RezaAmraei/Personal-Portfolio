import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactLogo, NodeLogo, cockroachLogo, Socket, Aws } from "../Images";
import { Button } from "antd";

const ProjectDetails = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  //   const technologies = ["React", "Node", "CockRoachDB", "AWS", "Socket.io"];
  const technologies = ["React", "Node", "CockRoachDB", "Socket.io", "AWS"];

  const images = {
    React: ReactLogo,
    Node: NodeLogo,
    CockRoachDB: cockroachLogo,
    "Socket.io": Socket,
    AWS: Aws,
  };
  return (
    <div className="product-details-container">
      <span className="detail-tags" data-aos="slide-right" data-aos-delay="0">
        {"<"} Twitter Clone {">"}
      </span>
      <div data-aos="slide-right" data-aos-delay="0">
        <span className="details-labels">Technologies Used:</span>
        <ul className="details-tech-list">
          {technologies.map((tech, i) => (
            <li key={i}>
              <span> - {tech}</span> <img src={images[tech]} />
            </li>
          ))}
        </ul>
      </div>
      <span></span>
      <span></span>
      <span></span>
      <span className="detail-tags" data-aos="slide-right" data-aos-delay="0">
        {"</"} Twitter Clone {">"}
      </span>
    </div>
  );
};

export default ProjectDetails;
