import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { product } = useContext(ShopContext);
  console.log("Products:", product);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = product.filter((item) => item?.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-10">
        <Title text1={"BEST"} text2={" SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          velit unde, natus mollitia nam blanditiis labore voluptate harum
          beatae.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => {
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />;
        })}
      </div>
    </div>
  );
};

export default BestSeller;
