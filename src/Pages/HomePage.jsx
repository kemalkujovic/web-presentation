import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { data } from "../assets/data";

import ScrollAnimation from "react-animate-on-scroll";

const HomePage = () => {
  const fristThreeCountry = data.slice(0, 3);

  return (
    <>
      <Hero />
      <h1 className="font-semibold text-4xl my-14 text-center font-serif md:text-6xl">
        Popular Destinations
      </h1>
      <div className="flex max-sm:flex-wrap gap-5 my-10">
        {fristThreeCountry.map((country) => {
          return (
            <ScrollAnimation key={country.title} animateIn="fadeIn">
              <Card
                title={country.title}
                description={country.description}
                image={country.image}
              />
            </ScrollAnimation>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
