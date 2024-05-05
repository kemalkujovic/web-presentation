import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import feedback1 from "../assets/feedback1.png";
import feedback2 from "../assets/feedback2.png";
import feedback3 from "../assets/feedback3.png";

const FeedbackCard = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl my-20">Ispovesti</h1>
      <div className="flex mb-20 gap-5 max-sm:flex-wrap font-serif justify-between">
        <div className="items-centar flex flex-col items-center gap-3">
          <img src={feedback1} alt="" className="rounded-full w-48" />
          <h1 className="font-semibold text-center">Milica Jovanović</h1>
          <p className="text-blue-500 font-semibold text-center">
            Ljubitelj Putovanja
          </p>
          <p className="text-sm text-gray-500 text-center">
            Oduševljena sam! Pronašla sam nekoliko destinacija koje su na mojoj
            listi želja već duže vreme.
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
          <h1 className="font-semibold text-center">Ana Marković</h1>
          <p className="text-blue-500 font-semibold text-center">Avanturista</p>
          <p className="text-sm text-gray-500 text-center">
            Sajt je sjajan! Jako mi se dopada dizajn i funkcionalnost.
            Definitivno ću ga preporučiti svojim prijateljima!
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
          <h1 className="font-semibold text-center">Jovan Petrović</h1>
          <p className="text-blue-500 font-semibold text-center">Avanturista</p>
          <p className="text-sm text-gray-500 text-center">
            Fantastičan sajt! Pronašao sam inspiraciju za svoje sledeće
            putovanje. Hvala vam na divnim idejama!
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
