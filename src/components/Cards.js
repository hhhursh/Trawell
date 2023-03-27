import React from "react";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards() {
  return (
    <div className="Cards">
      <h1>Check out these EPIC DESTINATIONS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <li className="cards__item"> */}
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Tarvel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            {/* </li> */}
          </ul>
        </div>

        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <li className="cards__item"> */}
            <CardItem
              src="images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />

            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himalaya Mountains"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/img-8.jpg"
              text="Ride through Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/services"
            />
            {/* </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
