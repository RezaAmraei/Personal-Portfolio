import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ReactLogo,
  NodeLogo,
  cockroachLogo,
  Socket,
  Aws,
  Next,
  Sanity,
  Stripe,
  Vercel,
} from "../Images";
import { Button } from "antd";

const ProjectDetails = ({
  projectDetails: { name, technologies, desc, links },
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const images = {
    AWS: Aws,
    CockRoachDB: cockroachLogo,
    "Next.js": Next,
    Node: NodeLogo,
    React: ReactLogo,
    Sanity: Sanity,
    "Socket.io": Socket,
    Stripe: Stripe,
    Vercel: Vercel,
  };

  return (
    <div className="product-details-container">
      <span className="detail-tags" data-aos="slide-right" data-aos-delay="0">
        {"<"} {name} {">"}
      </span>
      <div>
        <div data-aos="slide-right" data-aos-delay="0">
          <h1 className="details-labels">Technologies Used:</h1>
          <ul className="details-tech-list">
            {technologies.map((tech, i) => (
              <li key={i}>
                <span> - {tech}</span>
                <div className="test1">
                  <img src={images[tech]} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="project-desc" data-aos="slide-right" data-aos-delay="0">
          <h1 className="details-labels">About the project:</h1>
          <p>{desc}</p>
        </div>

        <div
          className="details-button-container"
          data-aos="slide-right"
          data-aos-delay="0"
        >
          <h1 className="details-labels">View the project:</h1>
          <div>
            <a href={links.github} target="blank">
              <Button type="primary" size="large" className="project-details-">
                GitHub
              </Button>
            </a>
            <a href={links.prod} target="blank">
              <Button type="primary" size="large">
                Demo Site
              </Button>
            </a>
          </div>
        </div>
      </div>

      <span className="detail-tags" data-aos="slide-right" data-aos-delay="0">
        {"</"} {name} {">"}
      </span>
    </div>
  );
};

export default ProjectDetails;
