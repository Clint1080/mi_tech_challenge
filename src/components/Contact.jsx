import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  // Setting state for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Adding styles for the email required field
  const addRequired = () => {
    const getSpan = document.querySelector(".required_container");
    getSpan.classList.add("required_styles");
  };
  const removeRequired = () => {
    const getSpan = document.querySelector(".required_container");
    getSpan.classList.remove("required_styles");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/forms", {
      firstName,
      lastName,
      title,
      email,
      message,
    });
    setFirstName("");
    setLastName("");
    setTitle("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <section>
        <h1>
          <span className="heading">Heading</span> One
        </h1>
        <p>
          Lorem ipsume dolor sit amet, consectetur adipiscing elit, sed do dos
          eiusmod tempor incididunt ut labore et trace dolore magna aliqua.
        </p>
        <p className="cta">
          Proi sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum
          varius duis at consectetur lorem
        </p>
      </section>
      <section className="form">
        <h2>Heading Two</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form_container">
            <input
              placeholder="First Name"
              type="text"
              id="f_name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              placeholder="Last Name"
              type="text"
              id="l_name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form_container">
            <input
              placeholder="Title"
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label className="required_container">
              <input
                placeholder="Email"
                type="text"
                id="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onInvalid={() => {
                  addRequired();
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  removeRequired();
                }}
              />
              <span className="required">Required</span>
            </label>
          </div>
          <textarea
            placeholder="Message"
            type="textarea"
            id="message"
            rows="6"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
