import React, { useEffect } from "react";
import { MyName, AboutMe, DisplayProject } from "../Components";
import Aos from "aos";

import "aos/dist/aos.css";
import "../CSS/body.css";

const Body = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const technologies = ["React", "Node", "CockRoachDB", "Socket.io", "AWS"];

  const twitter = {
    name: "Twitter Clone",
    technologies: ["React", "Node", "CockRoachDB", "Socket.io", "AWS"],
    desc: "In this project I looked to replicate all the main functionalities of Twitter, I allowed the user to create an account in which he can now create tweets, and also like, comment, and retweet them. This user can also interact with any of user by following them and being able to instant message them.",
    links: {
      github: "https://github.com/Twitter-Clone-2/Twitter",
      prod: "https://main.d3ieofe88k6zwp.amplifyapp.com/",
    },
  };
  return (
    <div id="body">
      <MyName />
      <AboutMe />
      <div id="project-header-wrapper">
        <h1 id="project-header" data-aos="slide-right" data-aos-delay="0">
          Projects
        </h1>
      </div>
      <DisplayProject projectDetails={twitter} />
    </div>
  );
};

export default Body;
