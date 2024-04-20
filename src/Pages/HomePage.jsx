import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { data } from "../assets/data";

import ScrollAnimation from "react-animate-on-scroll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex max-sm:flex-wrap gap-5 my-10">
        {data.map((country) => {
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
