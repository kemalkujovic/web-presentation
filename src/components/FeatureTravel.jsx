import React from "react";
import { Link } from "react-router-dom";

const FeatureTravel = ({ country }) => {
  return (
    <div className="flex mx-4 my-3 max-xl:flex-wrap gap-5 flex-col">
      <h1 className="font-semibold text-center text-2xl my-5">
        {country.title}
      </h1>
      <div className="flex items-center justify-center">
        <img
          src={country.image}
          alt=""
          className="h-[500px] object-contain max-md:h-full"
        />
      </div>
      <div className="flex gap-10 my-10 justify-center max-md:flex-col">
        <div className="border rounded-md p-5">
          <ul className="font-serif text-lg py-1 flex gap-3 flex-col">
            <li>Cena: {country.price}</li>
            <li>Trajanje: {country.duration}</li>
            <li>Dostupnost: {country.availability}</li>
          </ul>
        </div>
        <div className="border rounded-md p-5">
          <ul className="font-serif text-lg py-1 flex gap-3 flex-col">
            <li>Transport: {country.transport}</li>
            <li>Obrok: {country.meals}</li>
            <li>Smestaj: {country.accommodation}</li>
          </ul>
        </div>
        <div className="border rounded-md p-5 min-w-96 max-sm:min-w-full">
          <ul className="font-serif text-lg py-1 flex gap-3 flex-col">
            <li className="text-center">Aktivnosti:</li>
            {country.activities.map((activiti) => {
              return <li key={activiti}>{activiti}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <Link className="flex mb-10" to="/kontakt">
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-14 py-6 my-2 rounded-lg shadow-md w-full">
            Kontaktirajte nas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureTravel;
