import emailjs from "emailjs-com";
import React, { useEffect, useState, memo, useRef } from "react";

import Plane from "./Plane";
import getApi from "../api/getApi";
import { HOST } from "../contants/data";
Contact.propTypes = {};

function Contact() {
  const [dataContact, setDataContact] = useState([]);
  const [host, setHost] = useState(HOST);
  useEffect(() => {
    (async () => {
      try {
        const { data, host } = await getApi.getContact();
        setDataContact(data);
        setHost(host);
      } catch (error) {}
    })();
  }, []);
  const [inputs, setInputs] = useState({});
  const [sended, setSended] = useState(false);
  const timeout = useRef(null);
  const resetTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function sendEmail(e) {
    e.preventDefault();
    if (!inputs.name || !inputs || !inputs.email || !inputs.message) {
      alert("You must fill out all the fields");
    } else {
      (async () => {
        const send_at = Date();
        await getApi.postMessage({
          email: inputs.email,
          message: inputs.message,
          send_at: send_at,
        });
      })();
      emailjs
        .sendForm(
          "service_yynun1x",
          "template_k4yciiq",
          e.target,
          "5H-CVrNKeEwcvgtF3"
        )
        .then(
          (result) => {
            setSended(true);
            resetTimeout();
            setTimeout(() => {
              setSended(false);
              alert("Thanks you for contacting me");
            }, 6500);
            resetTimeout();
            setInputs({});
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
        {dataContact.map((item, index) => (
          <a
            className="contact_a"
            href={item.link}
            target="_blank"
            key={index}
            rel="noopener noreferrer"
          >
            <img alt="img" className="contact_img" src={host + item.img} />
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
        <div className={sended ? "div_control sended" : "div_control"}>
          <Plane />
          <button type="submit" value="Send" className="btn_send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(Contact);
