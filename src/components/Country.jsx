import React from "react";
import VideoPlayer from "./VidePlayer";
import FeatureItem from "./FeatureItem";

const Country = ({ title, descrpiton, image, video }) => {
  return (
    <>
      <h1 className="font-semibold text-center text-2xl my-5">
        Travel to {title}
      </h1>
      <FeatureItem descrpiton={descrpiton} image={image} />
      <h1 className="font-semibold text-2xl text-center mx-5">
        Video for {title}
      </h1>
      <div className="mx-4 bg-gray-200 flex items-center justify-center my-10">
        <VideoPlayer videoId={video} />
      </div>
    </>
  );
};

export default Country;
