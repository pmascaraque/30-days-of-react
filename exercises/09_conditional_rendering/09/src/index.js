import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

const App = () => {
  let status;

  let bool = false;

  if (bool) status = <h3>Bool is true</h3>;
  else status = <h3>Bool is false</h3>;

  return (
    <div>
      Yello
      {status}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
