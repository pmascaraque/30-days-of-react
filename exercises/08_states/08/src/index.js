import React, { useState } from "react";
import ReactDOM from "react-dom";
import asabeneh from "./images/asabeneh.jpg";

export default function Html() {
  const [backGroundColor, setBackGroundColor] = useState("red");
  return (
    <div>
      <div>
        <h1>Welcome to 30 Days of React</h1>
        <h2>Getting Started React</h2>
        <h3>Javascript Library</h3>
        <h4>Asabeneh Yetayeh</h4>
        <h5>Oct 7, 2020</h5>
      </div>

      <div>
        <p>Prerequisites to get started with React JS:</p>
        <p> HTML</p>
        <p> CSS</p>
        <p> JavaScript</p>
        <img src={asabeneh} alt="Asabeneh"></img>
        <h2>Asabeneh Yetayeh</h2>
        <p className="blueButton">Greet People</p>
        <p className="blueButton">Show Time</p>
        <button className="blueButton" onClick={() => setBackGroundColor("blue")}>Change Background</button>
        {console.log(backGroundColor)}
      </div>
    </div>
  );
}

const app = (
  <div>
    <Html />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
