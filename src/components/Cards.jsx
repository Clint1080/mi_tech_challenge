import React from "react";
import talkie from "../assets/Talkie.png";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
const Cards = () => {
  return (
    <ul className="cards">
      <li className="card">
        <div className="card_image_container">
          <img src={talkie}></img>
        </div>
        <div className="card_detail_container">
          <h2>Heading Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <button>Learn More</button>
        </div>
      </li>
      <li className="card">
        <div className="card_image_container">
          <img src={rabbit}></img>
        </div>
        <div className="card_detail_container">
          <h2>Heading Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <button>Learn More</button>
        </div>
      </li>
      <li className="card">
        <div className="card_image_container">
          <img src={shield}></img>
        </div>
        <div className="card_detail_container">
          <h2>Heading Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <button>Learn More</button>
        </div>
      </li>
    </ul>
  );
};

export default Cards;
