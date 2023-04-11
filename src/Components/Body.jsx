import React, { useEffect } from "react";
import {
  MyName,
  AboutMe,
  DisplayProject,
  PDFRender,
  ContactMe,
} from "../Components";
import Aos from "aos";
import "aos/dist/aos.css";
import "../CSS/body.css";

const Body = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const twitter = {
    name: "Twitter Clone",
    technologies: ["React", "Node", "CockRoachDB", "Socket.io", "AWS"],
    desc: "In this project I looked to replicate all the main functionalities of Twitter, I allowed the user to create an account in which he can now create tweets, and also like, comment, and retweet them. This user can also interact with any of user by following them and being able to instant message them.",
    links: {
      github: "https://github.com/Twitter-Clone-2/Twitter",
      prod: "https://main.d3ieofe88k6zwp.amplifyapp.com/",
    },
    images: ["twitter-mobile", "twitter-desktop-1", "twitter-desktop-2"],
  };
  const ecommerce = {
    name: "Ecommerce",
    technologies: ["Next.js", "Stripe", "Sanity", "Vercel"],
    desc: "In this project I built a e-commerce that is fully functional, it has a database with Sanity so the host of the website has an easy way to upload more products and checking out is linked with Stripe so the user knows that they have a easy and safe way to purchase the products.",
    links: {
      github: "https://github.com/RezaAmraei/Ecommerce",
      prod: "https://ecommerce-eight-sable.vercel.app/",
    },
    images: ["ecommerce-mobile", "ecommerce-desktop-1", "ecommerce-desktop-2"],
  };
  return (
    <div id="body">
      <MyName />
      <AboutMe />
      <div className="header-wrapper">
        <h1 className="header" data-aos="slide-right" data-aos-delay="0">
          Projects
        </h1>
      </div>
      <div id="projects">
        <DisplayProject
          projectDetails={twitter}
          projectScreenShots={twitter.images}
        />
        <DisplayProject
          projectDetails={ecommerce}
          projectScreenShots={ecommerce.images}
        />
      </div>
      <div className="header-wrapper">
        <h1 className="header">Resume</h1>
      </div>
      <PDFRender />
      <ContactMe />
    </div>
  );
};

export default Body;
