import React from "react";
import "./flipcard.css";
import allCards from "./getAllCardsImports";

const flipCard = ({ card }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={allCards.Back} />
        </div>
        <div className="flip-card-back">
          <img src={allCards[card]} />
        </div>
      </div>
    </div>
  );
};

export default flipCard;
