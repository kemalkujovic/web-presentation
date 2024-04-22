import React from "react";

const FeatureItem = ({ image, descrpiton }) => {
  return (
    <div className="flex mx-4 my-3 max-xl:flex-wrap gap-5">
      <img src={image} alt="" className="w-full" />
      <div className="flex items-center">
        <p className="text-xl max-md:text-lg font-serif leading-10">
          {descrpiton}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
