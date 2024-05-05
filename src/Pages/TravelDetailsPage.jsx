import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";
import FeatureTravel from "../components/FeatureTravel";
const TravelDetailsPage = () => {
  const { id } = useParams();

  const country = data.find((el) => el.title.toLowerCase() === id);

  if (!country) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-center">Country not found!</p>
      </div>
    );
  }

  return (
    <div>
      <FeatureTravel country={country} />
    </div>
  );
};

export default TravelDetailsPage;
