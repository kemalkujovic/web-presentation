import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, description }) => {
  console.log(description.slice(0, 200));
  return (
    <div className="border rounded-md flex flex-col p-2">
      <div className="rounded-md overflow-hidden h-80">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <h1 className="font-semibold py-1 mt-1 text-2xl">Trip in {title}</h1>
      <p className="font-serif text-lg py-1">{description.slice(0, 250)}...</p>
      <Link className="flex w-full" to={`/country/${title.toLowerCase()}`}>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 my-2 rounded-lg shadow-md w-full">
          Discover More
        </button>
      </Link>
    </div>
  );
};

export default Card;
