import React from "react";
import ReactDOM from "react-dom";
import html_logo from "./images/html_logo.png";
import css_logo from "./images/css_logo.png";
import react_logo from "./images/react_logo.png";
import js_logo from "./images/js_logo.jpg";
import asabeneh from "./images/asabeneh.jpg";
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

    <div id="main">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <form>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Email"></input>
      </form>
      <button>Subscribe</button>
    </div>

    <footer>
      <img id="sensei" src={asabeneh} alt="Asabeneh" />
      <h1>ASABENEH YETAYEH</h1>
      <p>Senior Developer, Finland</p>
      <h2>SKILLS</h2>
      <div id="skills">
        <p>HTML</p>
        <p>CSS</p>
        <p>Sass</p>
        <p>JS</p>
        <p>React</p>
        <p>Redux</p>
        <p>Node</p>
        <p>MongoDB</p>
        <p>Python</p>
        <p>Flask</p>
        <p>Django</p>
        <p>MYSQL</p>
        <p>GraphQL</p>
        <p>D3.js</p>
      </div>
      <p>Joined on Aug 30, 2020</p>
    </footer>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
