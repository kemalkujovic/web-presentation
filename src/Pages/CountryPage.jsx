import React from "react";
import { data } from "../assets/data";
import { useParams } from "react-router-dom";
import Country from "../components/Country";
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
    <Country
      title={country.title}
      descrpiton={country.description}
      image={country.image}
      video={country.video}
    />
  );
};

export default CountryPage;
