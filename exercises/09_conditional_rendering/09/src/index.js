import ReactDOM from "react-dom";
import "./styles/index.css";

const App = () => {
  const getSeasonColor = () => {
    let div_1_color;

    switch (new Date().getMonth) {
      case (0, 1, 2):
        div_1_color = "white";
        break;
      case (3, 4, 5):
        div_1_color = "green";
        break;
      case (6, 7, 8):
        div_1_color = "yellow";
        break;
      case (9, 10, 11):
        div_1_color = "brown";
        break;
      default:
        div_1_color = "green";
    }
    return div_1_color;
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
