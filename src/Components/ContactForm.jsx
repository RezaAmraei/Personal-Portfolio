import React, { useEffect, useState, useRef } from "react";
import "../CSS/contactForm.css";
import "aos/dist/aos.css";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import { Input, Button } from "antd";

const { TextArea } = Input;
function ContactForm() {
  useEffect(() => {
    Aos.init();
    emailjs.init();
  }, []);

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function checkEmptyInputs() {
    let result = true;
    if (name.length === 0) {
      setNameError(true);
      result = false;
    }
    if (email.length === 0) {
      setEmailError(true);
      result = false;
    }
    if (message.length === 0) {
      setMessageError(true);
      result = false;
    }
    return result;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkEmptyInputs()) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 data-aos="slide-right">Send me an email!</h1>
      <form onSubmit={handleSubmit} className="contact-form" ref={form}>
        <label className="contact-form__label" data-aos="slide-left">
          Name:
          <Input
            className="contact-form__input"
            showCount
            required
            maxLength={20}
            type="text"
            name="from_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            status={nameError ? "error" : null}
          />
        </label>
        <label className="contact-form__label" data-aos="slide-right">
          Email:
          <Input
            name="return_email"
            className="contact-form__input"
            type="email"
            required
            value={email}
            showCount
            maxLength={40}
            status={emailError ? "error" : null}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="contact-form__label" data-aos="slide-left">
          Message:
          <TextArea
            maxLength={200}
            style={{ height: 120, resize: "none", marginBottom: 40 }}
            required
            name="message"
            value={message}
            status={messageError ? "error" : null}
            allowClear
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <Button className="contact-form__button" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
