import React from "react";
import VideoPlayer from "./VidePlayer";
import FeatureItem from "./FeatureItem";
import { Link } from "react-router-dom";

const Country = ({ title, descrpiton, image, video }) => {
  return (
    <>
      <h1 className="font-semibold text-center text-2xl my-5">
        Putovanje u {title}
      </h1>
      <FeatureItem descrpiton={descrpiton} image={image} />
      <div className="flex justify-center items-center w-full">
        <Link to={`/aranzman/${title.toLowerCase()}`}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 my-10 rounded-lg shadow-md w-full">
            Pogledaj Aranžman
          </button>
        </Link>
      </div>
      <h1 className="font-semibold text-2xl text-center mx-5">
        Video za {title}
      </h1>
      <div className="mx-4 bg-gray-200 flex items-center justify-center my-10">
        <VideoPlayer videoId={video} />
      </div>
    </>
  );
};

export default Country;
