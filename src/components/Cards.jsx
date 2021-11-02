import React, { useState, useEffect } from "react";
import axios from "axios";
import talkie from "../assets/Talkie.png";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
const Cards = () => {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const res = await axios.get(`http://localhost:3001/`);
    setCards(res.data);
  };

  useEffect(() => {
    getCards();
  }, []);

  const showCards = cards.map((card) => {
    return (
      <li key={card.card_id} className="card">
        <div className="card_image_container">
          <img src={card.url}></img>
        </div>
        <div className="card_detail_container">
          <h2>{card.title}</h2>
          <p>{card.paragraph}</p>
          <button>Learn More</button>
        </div>
      </li>
    );
  });

  return <ul className="cards">{showCards}</ul>;
};

export default Cards;
