import React from "react";
import h from "../img/h.png";
import p from "../img/p.png";
import f from "../img/f.png";
export const Industries = () => {
  return (
    <div className="Industries">
      <h1>Industries we work</h1>
      <div className="rolls">
        <div className="row_rolls">
          <div className="roll_content">
            <img src={h} alt="" />
            <h3>Healthcare</h3>
          </div>
          <div className="roll_content">
            <img src={p} alt="" />
            <h3>E-commerce</h3>
          </div>
          <div className="roll_content">
            <img src={f} alt="" />
            <h3>Finance </h3>
          </div>
          <div className="roll_content">
            <img src={h} alt="" />
            <h3>Education</h3>
          </div>
        </div>
        <div className="row_rolls">
          <div className="roll_content">
            <img src={p} alt="" />
            <h3>Automotive</h3>
          </div>
          <div className="roll_content">
            <img src={f} alt="" />
            <h3>Tourism</h3>
          </div>
          <div className="roll_content">
            <img src={h} alt="" />
            <h3>Travel</h3>
          </div>
          <div className="roll_content">
            <img src={p} alt="" />
            <h3>AI</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
