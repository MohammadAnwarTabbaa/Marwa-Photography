import React from "react";
import "./Contact.css";
import img1 from "./Contact_Img.jpg";

function Contact() {
  return (
    <div className="wrapContact">
      <div className="contact-form">
        <header className="titleContact">Contact</header>
        <form className="form">
          <span className="titleMessage">Send me a message</span>
          <br />

          <div
            className="validate-input"
            data-validate="Please enter your name"
          >
            <input
              className="input inputName"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <span className="focus-name"></span>
          </div>

          <div
            className="validate-input"
            data-validate="Please enter your email: e@a.x"
          >
            <input
              className="input inputEmail"
              type="text"
              name="email"
              placeholder="E-mail"
            />
            <span className="focus-email"></span>
          </div>

          <div
            className="validate-input"
            data-validate="Please enter your phone"
          >
            <input
              className="input inputPhone"
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <span className="focus-phone"></span>
          </div>

          <div
            className="validate-input"
            data-validate="Please enter your message"
          >
            <textarea
              className="input inputMessage"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <span className="focus-message"></span>
          </div>

          <div className="form-btn">
            <button className="sendBtn">Send</button>
          </div>
        </form>
      </div>

      <div className="contact-img">
        <img src={img1}></img>
      </div>
    </div>
  );
}

export default Contact;
