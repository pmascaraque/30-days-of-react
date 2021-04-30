import React from "react";
import Layout from "../components/Layout";

export const colors = [
  "#DFFF00",
  "#3CB371",
  "#FFD700",
  "#0000FF",
  "#00FA9A",
  "#6495ED",
  "#B8860B",
  "#32CD32",
  "#008080",
  "#FFBF00",
  "#66CDAA",
  "#4682B4",
  "#808000",
  "#FF7F50",
  "#800000",
  "#778899",
  "#40E0D0",
  "#000000",
  "#DB7093",
  "#DE3163",
  "#C0C0C0",
  "#DEB887",
  "#00BFFF",
  "#9FE2BF",
  "#DDA0DD",
  "#B0C4DE",
  "#CCCCFF",
  "#00FFFF",
  "#ADFF2F",
  "#C71585",
  "#BA55D3",
  "#800080",
];

const Tile = ({ tile }) => {
  return (
    <div className="subTile" style={{backgroundColor: tile}}>
      <h1>{tile}</h1>
    </div>
  );
};

const Tiles = ({ colors }) => {
  const tileList = colors.map((tile) => <Tile key={tile} tile={tile} />);
  return <div className="tiles">{tileList}</div>;
};

function Colors() {
  return (
    <Layout>
      <h1>30 Days of React</h1>
      <h3>Hexadecimal Colors</h3>
      <Tiles colors={colors} />
    </Layout>
  );
}

export default Colors;
