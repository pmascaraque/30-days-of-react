import ReactDOM from "react-dom";
import "./styles/index.css";
import getSeasonColor from "./functions/GetSeasonColor"

const App = () => {

  return (
    <div>
      <h1 style={{ backgroundColor: getSeasonColor, height: 300 }}>
        Winter: White | Spring: Green | Summer: Yellow | Autumn: Brown
      </h1>
      <h1 style={{ backgroundColor: "blue", height: 300 }}>
        Morning: Blue | Evening: Dark Blue | Night: Black
      </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
