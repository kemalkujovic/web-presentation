import React from "react";
import background from "../assets/bg.png";

const Card = () => {
  return (
    <div className="border rounded-md flex flex-col p-2">
      <img src={background} alt="" className="rounded-md" />
      <h1 className="font-semibold py-1">TITLE</h1>
      <p className="font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        tempora, voluptatibus perspiciatis, culpa quia at est ipsa dicta natus
        cum doloremque vitae. Velit temporibus, aut, architecto explicabo
        recusandae corporis quisquam necessitatibus sapiente repellat eum ea
        labore laborum fuga, earum accusantium!
      </p>
    </div>
  );
};

export default Card;
