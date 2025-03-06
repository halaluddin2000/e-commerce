import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

function LatesCollection() {
  const { product } = useContext(ShopContext);
  console.log(product);
  return <div></div>;
}

export default LatesCollection;
