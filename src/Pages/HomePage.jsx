import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { data } from "../assets/data";
const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex max-sm:flex-wrap gap-5 my-10">
        {data.map((country) => {
          return (
            <Card
              key={country.title}
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

export default HomePage;
