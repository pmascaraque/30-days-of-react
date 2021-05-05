import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

const App = () => {
  const [boolean, setBoolean] = useState(true);
  let status;

  if (boolean) status = <h3>Bool is true</h3>;
  else status = <h3>Bool is false</h3>;

  const changeBoolean = () => setBoolean(!boolean);

  return (
    <div>
      Yello
      {status}
      <button onClick={changeBoolean}>Change Bool</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
