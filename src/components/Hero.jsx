import React from "react";
import background from "../assets/bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full relative mt-3">
      <img
        src={background}
        alt="bg"
        className="max-sm:h-96 w-full object-fill h-[900px]"
      />
      <Link to="/zemlje">
        <button className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 rounded-lg shadow-md">
          Istražite putovanja
        </button>
      </Link>
    </div>
  );
};

export default Hero;
