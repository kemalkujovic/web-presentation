import React from "react";
import VideoPlayer from "./VidePlayer";

const Country = ({ title, descrpiton, image, video }) => {
  return (
    <>
      <div className="flex mx-4 my-3 max-xl:flex-wrap gap-5">
        <img src={image} alt="" className="w-full" />
        {/* <h1>{title}</h1> */}
        <div className="flex items-center">
          <p className="text-xl max-md:text-lg font-serif leading-10">
            {descrpiton}
          </p>
        </div>
      </div>
      <h1 className="font-semibold text-2xl text-center mx-5">
        Video for {title}
      </h1>
      <div className="bg-gray-200 flex items-center justify-center my-10">
        <VideoPlayer videoId={video} />
      </div>
    </>
  );
};

export default Country;
