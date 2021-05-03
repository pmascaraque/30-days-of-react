import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Html() {
  const [backGroundColor, setBackGroundColor] = useState("white");

  const colors = ["Aqua", "DarkOliveGreen", "DarkRed", "Indigo"];

  const greetPeople = () =>
    alert("Welcome to 30 days of React Challenge, 2021");

  return (
    <div style={{ backgroundColor: backGroundColor, height: 700 }}>
      <button onClick={greetPeople}>Greet People</button>

      <button>Show Time</button>

      <button
        onClick={() =>
          setBackGroundColor(colors[Math.floor(Math.random() * 4)])
        }
      >
        Change Background
      </button>
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
