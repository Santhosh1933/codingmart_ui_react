import React, { useState } from "react";
import logo from "../img/logo.png";
import logo1 from "../img/logo1.png";
export const Home = () => {

  const [src, setSrc] = useState(logo);
  const [btn, setBtn] = useState();
  document.addEventListener("scroll", () => {
    const val = window.pageYOffset;
    if (val > 12) {
      document.querySelector(".nav").style.background = "white";
      document.querySelector(".nav").style.height = "10vh";
      const nodeList = document.querySelectorAll("li");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "black";
      }
      setSrc(logo1);
      setBtn(
        <li>
          <button className="nav_btn">Let's Collaborate!</button>
        </li>
      );
    }
    if (val < 12) {
      document.querySelector(".nav").style.background = "transparent";
      document.querySelector(".nav").style.height = "15vh";
      const nodeList = document.querySelectorAll("li");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "white";
      }
      setSrc(logo);
      setBtn();
    }
  });
  return (
    <div className="home">
      <div className="home_container">
        <div className="nav">
          <img src={src} alt="" />
          <ul>
            <li>Home</li>
            <li className="dropdown aboutDrop">
              About Us
              <div className="dropContainer">
                <table className="droplist">
                  <tr>
                    <td>Who We Are</td>
                  </tr>
                  <tr>
                    <td>Life@Codingmart</td>
                  </tr>
                  <tr>
                    <td>Learning and Development</td>
                  </tr>
                </table>
              </div>
            </li>
            <li className="dropdown serviceDrop">
              Services
              <div className="dropContainer">
                <table className="droplist">
                  <tr>
                    <td>IT Strategy and Consulting</td>
                  </tr>
                  <tr>
                    <td>Enterprise platforms, Tools and Automation</td>
                  </tr>
                  <tr>
                    <td>Application development</td>
                  </tr>
                  <tr>
                    <td>DevOps and IT Infrastructure</td>
                  </tr>
                </table>
              </div>
            </li>
            <li>Technology</li>
            <li>Careers</li>
            <li className="dropdown exploreDrop">
              Explore
              <div className="dropContainer">
                <table className="droplist">
                  <tr>
                    <td>Blogs</td>
                  </tr>
                  <tr>
                    <td>Case studies & Testimonials</td>
                  </tr>
                </table>
              </div>
            </li>
            <li className="con">Contact</li>
            {btn}
          </ul>
        </div>
        <div className="home_content">
          <h1>IT Specialists helping companies transform business. </h1>
          <p>
            Codingmart helps companies of all sizes from Startups to Unicorns to
            Enterprises; to pioneer the next generation technologies
          </p>
          <button className="btn">Let's Collaborate!</button>
        </div>
      </div>
    </div>
  );
};
