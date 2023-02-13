import React, { useContext, useEffect, useState } from "react";
import CategoryPage from "@/components/category/CategoryPage";
import { store } from "@/store/Context";

const Electronic = () => {
  const context = useContext(store);
  const [digitalCategory, setDigitalCategory] = useState({});
  const [houseCategory, setHouseCategory] = useState({});
  const [Products, setProducts] = useState({});
  useEffect(() => {
    const products = {};
    const digitalProducts = context.Digital.Products;
    const houseProducts = context.House.Products;
    for (let key in digitalProducts) {
      products[key] = digitalProducts[key];
    }
    for (let key in houseProducts) {
      products[key] = houseProducts[key];
    }
    setProducts(products);

    const digital = context.allCategories["Digital products"].products;
    setDigitalCategory(digital);

    const house = context.allCategories["House"].products;
    setHouseCategory(house);
  }, [context]);

  return (
    <CategoryPage
      productsCategory={digitalCategory}
      productsCategory2={houseCategory}
      productsItems={Products}
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      activeText={"Electronic needs"}
    />
  );
};

export default Electronic;
