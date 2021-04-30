import React from "react";
import Layout from "../components/Layout";

export const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const Tile = ({ tile }) => {
  let color;

  if (tile % 2 == 0) color = "green";
  else if (tile % 2 != 0) color = "yellow";
  else color = "red";

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{tile}</h1>
    </div>
  );
};

const Tiles = ({ numbers }) => {
  const tileList = numbers.map((tile) => <Tile key={tile} tile={tile} />);
  return <div>{tileList}</div>;
};

function Numbers() {
  return (
    <Layout>
      <div>
        <h1>30 Days of React</h1>
        <h3>Number Generator</h3>
        <Tiles numbers={numbers} />
      </div>
    </Layout>
  );
}

export default Numbers;
