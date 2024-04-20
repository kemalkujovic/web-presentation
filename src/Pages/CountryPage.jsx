import React from "react";
import { data } from "../assets/data";
import { useParams } from "react-router-dom";
const CountryPage = () => {
  const { id } = useParams();

  const country = data.find((el) => el.title.toLowerCase() === id);

  console.log(country);

  if (!country) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-center">Country not found!</p>
      </div>
    );
  }

  return (
    <div>
      <p>{country.title}</p>
      <p>{country.description}</p>
    </div>
  );
};

export default CountryPage;
