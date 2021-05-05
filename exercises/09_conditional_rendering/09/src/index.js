import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

const App = () => {
  const [boolean, setBoolean] = useState(true);

  let status = boolean ? <h3>Bool is true</h3> : <h3>Bool is false</h3>;

  let one = <h1>TRUE</h1>
  let two = <h1>FALSE</h1>

  let test = <h2>TEST appears on true</h2>

  const changeBoolean = () => setBoolean(!boolean);

  return (
    <div>
      Yello
      {boolean ? one : two}
      {status}
      <button onClick={changeBoolean}>Change Bool</button>
      {boolean && test}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
