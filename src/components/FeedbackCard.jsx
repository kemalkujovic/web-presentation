import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import feedback1 from "../assets/feedback1.png";
import feedback2 from "../assets/feedback2.png";
import feedback3 from "../assets/feedback3.png";

const FeedbackCard = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl my-20">Testimonials</h1>
      <div className="flex mb-20 gap-5 max-sm:flex-wrap font-serif">
        <div className="items-centar flex flex-col items-center gap-3">
          <img src={feedback1} alt="" className="rounded-full w-48" />
          <h1 className="font-semibold text-center">Maria Smantha</h1>
          <p className="text-blue-500 font-semibold text-center">
            Travel Enthusiast
          </p>
          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            iste quibusdam? Ratione accusamus commodi eligendi harum quis
            quaerat fuga non.
          </p>
          <div className="flex items-center justify-center text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
        </div>
        <div className="items-centar flex flex-col items-center gap-3">
          <img src={feedback2} alt="" className="rounded-full w-48" />
          <h1 className="font-semibold text-center">Lisa Cudrow</h1>
          <p className="text-blue-500 font-semibold text-center">
            Web Developer
          </p>
          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita sequi libero sit officia asperiores facilis ratione facere
            quibusdam in!
          </p>
          <div className="flex items-center justify-center text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div className="items-centar flex flex-col items-center gap-3">
          <img src={feedback3} alt="" className="rounded-full w-48" />
          <h1 className="font-semibold text-center">John Smith</h1>
          <p className="text-blue-500 font-semibold text-center">
            Travel Enthusiast
          </p>
          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
            quo fugit dignissimos consectetur minima quas autem dolore possimus
            natus.
          </p>
          <div className="flex items-center justify-center text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
