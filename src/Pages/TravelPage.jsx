import React from "react";
import { data } from "../assets/data";
import TravelCard from "../components/TravelCard";

const TravelPage = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl my-14 text-center font-serif md:text-5xl">
        Svi Aranžmani
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
        {data.map((country, index) => {
          return (
            <TravelCard
              key={index}
              title={country.title}
              duration={country.duration}
              price={country.price}
              availability={country.availability}
              image={country.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default TravelPage;
