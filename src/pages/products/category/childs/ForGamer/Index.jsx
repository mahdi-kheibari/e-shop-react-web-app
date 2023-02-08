import React, { useContext, useEffect, useState } from "react";
import CategoryPage from "../../../../../components/category/CategoryPage";
import { store } from "../../../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const [digitalCategory, setDigitalCategory] = useState({});
  const [houseCategory, setHouseCategory] = useState({});
  const [Products, setProducts] = useState({});
  useEffect(() => {
    const products = {};
    const digitalProducts = context.Digital.Products["laptop"];
    products["laptop"] = digitalProducts;
    const houseProducts = context.House.Products["video-audio"];
    products["video-audio"] = houseProducts;
    setProducts(products);

    const digital = {};
    const digitalProduct =
      context.allCategories["Digital products"].products["laptop"];
    digital["laptop"] = digitalProduct;
    setDigitalCategory(digital);

    const house = {};
    const houseProduct = context.allCategories["House"].products["video-audio"];
    house["video-audio"] = houseProduct;
    setHouseCategory(house);
  }, [context]);

  return (
    <CategoryPage
      productsCategory={digitalCategory}
      productsCategory2={houseCategory}
      productsItems={Products}
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      activeText={"For gamers"}
    />
  );
};

export default Index;
