import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Html() {
  return (
    <div>
      {" "}
      use the restcountries api and search with a random number, then get fetch
      them with curly brackets and the population, country, flag, etc
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
