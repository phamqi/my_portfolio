import React, { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

import { dataContact } from "../contants/data";
Contact.propTypes = {};

function Contact() {
  const [inputs, setInputs] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };
  function sendEmail(e) {
    e.preventDefault();
    if (
      inputs.name === "" ||
      Boolean(inputs) ||
      inputs.email === "" ||
      inputs.message === ""
    ) {
      alert("You must fill out all the fields");
    } else {
      emailjs
        .sendForm(
          "service_yynun1x",
          "template_k4yciiq",
          e.target,
          "5H-CVrNKeEwcvgtF3"
        )
        .then(
          (result) => {
            alert("Thanks you for contacting me");
          },
          (error) => {
            alert("Something went wrong, please try again later");
          }
        );
      e.target.reset();
    }
  }
  return (
    <div className="app_contact df-c">
      <nav className="app_nav_contact">
        {dataContact.map((item) => (
          <a href={item.link} target="_blank">
            <div
              style={{
                width: "65px",
                height: "65px",
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundSize: "contain",
                borderRadius: "50%",
                margin: "0 10px",
                border: "2px solid white",
              }}
            ></div>
          </a>
        ))}
      </nav>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={onChange}
          value={inputs.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={onChange}
          value={inputs.email || ""}
        />
        <textarea
          className="textarea_message"
          name="message"
          placeholder="Your message"
          onChange={onChange}
          value={inputs.message || ""}
        />
        <div className="div_control">
          <button type="submit" value="Send" className="btn_send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
