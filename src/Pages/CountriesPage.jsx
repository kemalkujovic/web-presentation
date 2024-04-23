import React from "react";
import { data } from "../assets/data";
import Card from "../components/Card";

const CountriesPage = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl my-14 text-center font-serif md:text-5xl">
        All Trips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
        {data.map((country, index) => {
          return (
            <Card
              key={index}
              title={country.title}
              description={country.description}
              image={country.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountriesPage;
