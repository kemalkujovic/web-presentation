import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex gap-2 my-10">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
