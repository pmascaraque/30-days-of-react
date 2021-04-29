import React from "react";
import Layout from "../components/Layout";

const MapNumbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};

function Numbers() {
  return (
    <Layout>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
    </Layout>
  );
}

export default Numbers;
