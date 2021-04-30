import React from "react";
import Layout from "../components/Layout";

export const numbers = [
  0,
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

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};

const Tile = ({ tile }) => {
  let color;

  if (tile % 2 == 0) color = "green";
  else if (isPrime(tile)) color = "red";
  else color = "yellow";

  return (
    <div className="subTile" style={{ backgroundColor: color }}>
      <h1>{tile}</h1>
    </div>
  );
};

const Tiles = ({ numbers }) => {
  const tileList = numbers.map((tile) => <Tile key={tile} tile={tile} />);
  return <div className="tiles">{tileList}</div>;
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