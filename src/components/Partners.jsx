import React from "react";
import mynthra from "../img/myntra.png";
import digit from "../img/Digit.png";
import practo from "../img/Practo.png";
import flipcart from "../img/Flipkart.png";
import nykaa from "../img/nykaa.png";
import MyGate from "../img/MyGate.png";
import OKCredit from "../img/OKCredit.png";
import Udaan from "../img/Udaan.png";
import Landmark from "../img/Landmark.jpg";
import aditya from "../img/aditya.jpg";

export const Partners = () => {
  return (
    <div>
      <div className="Partners">
        <h1>We work with</h1>
        <div className="line"></div>
        <div className="img_container">
          <img src={mynthra} alt="" />
          <img src={digit} alt="" />
          <img src={practo} alt="" />
          <img src={flipcart} alt="" />
          <img src={nykaa} alt="" />
          <img src={MyGate} alt="" />
          <img src={OKCredit} alt="" />
          <img src={Udaan} alt="" />
          <img src={Landmark} alt="" />
          <img src={aditya} alt="" />
        </div>
      </div>
      <div className="bottom_line"></div>
    </div>
  );
};
