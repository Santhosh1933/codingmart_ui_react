import React from "react";
import { ExploreCards } from "./ExploreCards";

import card1 from '../img/card1.jpeg'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
import card4 from '../img/card4.jpeg'
export const Explore = () => {
  return (
    <div className="Explore">
      <h1>Explore our digital transformation services</h1>
      <p>
        Codingmart brings together a distinctive set of software building
        capabilities to help our clients on their digital journey. Be it a large
        enterprise or a startup growing exponentially, we can build software
        solutions for your everyday problems.
      </p>
    <div className='cards'>
      <ExploreCards src={card3} title='IT Strategy and Consulting' />
      <ExploreCards src={card4} title='IT Strategy Consulting' />
      <ExploreCards src={card2} title='IT Strategy Consulting' />
      <ExploreCards src={card1} title='IT Strategy Consulting' />
    </div>
    </div>
  );
};
