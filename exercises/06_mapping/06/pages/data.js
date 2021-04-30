import React from "react";
import Layout from "../components/Layout";

export const countries = [
  { name: "World", population: 7693165599 },
  { name: "China", population: 1377422166 },
  { name: "India", population: 1295210000 },
  { name: "United States of America", population: 323947000 },
  { name: "Indonesia", population: 258705000 },
  { name: "Brazil", population: 206135893 },
  { name: "Pakistan", population: 194125062 },
  { name: "Nigeria", population: 186988000 },
  { name: "Bangladesh", population: 161006790 },
  { name: "Russian Federation", population: 146599183 },
  { name: "Japan", population: 126960000 },
];

const styles = {
  color: "Fuchsia",
};

const Country = ({ country: { name, population } }) => {

  return (
    <div className="countrySub">
      <h2>{name}</h2>
      <div
        className="bar"
        style={{
          backgroundColor: styles.color,
          width: `${(100*population) / 7693165599}%`
        }}
      ></div>
      <h2>{population}</h2>
    </div>
  );
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};

function Data() {
  return (
    <Layout>
      <div className="data">
        <h1>30 days of react</h1>
        <h2>World population</h2>
        <p> Ten most populated countries</p>
        <Countries countries={countries} />
      </div>
    </Layout>
  );
}

export default Data;
