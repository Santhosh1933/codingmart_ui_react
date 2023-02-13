import React from "react";
import python from "../img/pythonnew-1-e1574249929176.png";
import node from "../img/nodejs.png";
import rails from "../img/rails.png";
import docker from "../img/docker.png";
import kuber from "../img/kubernetes.png";
import server from "../img/serverless.png";
import vue from "../img/vuejs.png";
import react from "../img/react.png";
import angular from "../img/Angularjs.png";
import reactNative from "../img/reactnative-e1574247706671.png";
import swift from "../img/swift_50_2_40-1-e1574247613274.jpg";
import kotlin from "../img/kotlin1_2_50_4_70-e1574247668584.jpg";
export const Technologies = () => {
  return (
    <div className="Technologies">
      <h1>Technologies</h1>
      <div className="Technologies_content">
        <div className="row_technologies">
          <tr className="head">
            <th>Back End Development</th>
            <tr>
              <td>
                <img src={python} alt="" />
              </td>
              <td>
                <img src={node} alt="" />
              </td>
              <td>
                <img src={rails} alt="" />
              </td>
            </tr>
          </tr>
          <tr className="head">
            <th>Back End Development</th>
            <tr>
              <td>
                <img src={docker} alt="" />
              </td>
              <td>
                <img src={kuber} alt="" />
              </td>
              <td>
                <img src={server} alt="" />
              </td>
            </tr>
          </tr>
        </div>
        <div className="row_technologies">
          <tr className="head">
            <th>Back End Development</th>
            <tr>
              <td>
                <img src={vue} alt="" />
              </td>
              <td>
                <img src={react} alt="" />
              </td>
              <td>
                <img src={angular} alt="" />
              </td>
            </tr>
          </tr>
          <tr className="head">
            <th>Back End Development</th>
            <tr>
              <td>
                <img src={reactNative} alt="" />
              </td>
              <td>
                <img src={swift} alt="" />
              </td>
              <td>
                <img src={kotlin} alt="" />
              </td>
            </tr>
          </tr>
        </div>
      </div>
    </div>
  );
};
