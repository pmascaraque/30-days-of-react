import React from "react";
import ReactDOM from "react-dom";
import html_logo from "./images/html_logo.png";
import css_logo from "./images/css_logo.png";
import react_logo from "./images/react_logo.png";
import js_logo from "./images/js_logo.jpg";
import "./index.css"

const app = (
  <div>
    <header>
      <h1>Front End Technologies</h1>
      <div id="w3_container">
        <img class="w3" src={html_logo} alt="HTML" />
        <img class="w3" src={css_logo} alt="CSS" />
        <img class="w3" src={js_logo} alt="Javascript" />
        <img class="w3" src={react_logo} alt="React" />
      </div>
    </header>

    <body>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <form id ="form">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Email"></input>
      </form>
      <button>Subscribe</button>
    </body>

    <footer></footer>
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
