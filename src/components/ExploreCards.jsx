import React from "react";

export const ExploreCards = (props) => {
  return (
    <div className="card_c">
      <div className="overlay">
        <img src={props.src} alt="" />
      </div>
      <h1 className="title">{props.title}</h1>
      <h6>Learn More</h6>
      <div className="line_under"></div>
    </div>
  );
};
