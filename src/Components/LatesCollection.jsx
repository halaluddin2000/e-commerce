import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

function LatesCollection() {
  const { product } = useContext(ShopContext);
  console.log(product);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={" COLLECTIONS"}></Title>
        <p className="w-3/4 m-auto sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          excepturi dolor
        </p>
      </div>
    </div>
  );
}

export default LatesCollection;
