import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Html() {
  const [backGroundColor, setBackGroundColor] = useState("white");

  const colors = ["Aqua", "DarkOliveGreen", "DarkRed", "Indigo"];

  const showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  const greetPeople = () =>
    alert("Welcome to 30 days of React Challenge, 2021");

  const handleTime = () => {
    alert(showDate(new Date()));
  };

  const changeBackground = () => {
    setBackGroundColor(colors[Math.floor(Math.random() * 4)]);
  };

  return (
    <div style={{ backgroundColor: backGroundColor, height: 700 }}>
      <button onClick={greetPeople}>Greet People</button>

      <button onClick={handleTime}>Show Time</button>

      <button onClick={changeBackground}>Change Background</button>
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
