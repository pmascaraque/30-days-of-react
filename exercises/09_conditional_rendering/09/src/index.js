import ReactDOM from "react-dom";
import "./styles/index.css";

const App = () => {
  const getSeasonColor = () => {
    switch (new Date().getMonth()) {
      case 0:
      case 1:
      case 2:
        return "white";
      case 3:
      case 4:
      case 5:
        return "blue";
      case 6:
      case 7:
      case 8:
        return "yellow";
      case 9:
      case 10:
      case 11:
        return "brown";
      default:
        return "orange";
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: getSeasonColor(), height: 300 }}>
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
