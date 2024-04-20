import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, description }) => {
  return (
    <div className="border rounded-md flex flex-col p-2">
      <img src={image} alt="" className="rounded-md h-80 object-cover" />
      <h1 className="font-semibold py-1 mt-1 text-2xl">Trip in {title}</h1>
      <p className="font-serif text-lg py-1">{description}</p>
      <Link className="flex w-full" to={`/country/${title.toLowerCase()}`}>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 my-2 rounded-lg shadow-md w-full">
          Discover More
        </button>
      </Link>
    </div>
  );
};

export default Card;
