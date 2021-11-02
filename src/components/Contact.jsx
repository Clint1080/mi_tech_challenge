import React from "react";

const Contact = () => {
  const addRequired = () => {
    const getSpan = document.querySelector(".required_container");
    getSpan.classList.add("required_styles");
  };
  const removeRequired = () => {
    const getSpan = document.querySelector(".required_container");
    getSpan.classList.remove("required_styles");
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
        <form action="">
          <div className="form_container">
            <input placeholder="First Name" type="text" id="f_name" />
            <input placeholder="Last Name" type="text" id="l_name" />
          </div>
          <div className="form_container">
            <input placeholder="Title" type="text" id="title" />
            <label className="required_container">
              <input
                placeholder="Email"
                type="text"
                id="email"
                required
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                onInvalid={() => {
                  addRequired();
                }}
                onChange={() => {
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
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
