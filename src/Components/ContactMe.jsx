import React, { useEffect } from "react";
import { GitHub, Linkedin } from "../Images";
import { Tooltip } from "antd";
import "../CSS/contact.css";
import { ContactForm } from "../Components";
import "aos/dist/aos.css";
import Aos from "aos";

const ContactMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="contact-container">
      <div className="contact-logos-container">
        <Tooltip title="My GitHub Account!">
          <a href="https://github.com/RezaAmraei" target="_blank">
            <img src={GitHub} className="contact-logos" data-aos="flip-right" />
          </a>
        </Tooltip>

        <Tooltip title="My LinkedIn Account!">
          <a href="https://www.linkedin.com/in/reza-amraei/" target="_blank">
            <img
              src={Linkedin}
              className="contact-logos"
              data-aos="flip-left"
            />
          </a>
        </Tooltip>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMe;
