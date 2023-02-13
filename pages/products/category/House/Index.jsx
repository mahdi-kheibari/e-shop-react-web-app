import React, { useCallback, useContext, useMemo } from "react";
import CategoryPage from "@/components/category/CategoryPage";
import { store } from "@/store/Context";

let Products = {};
const House = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["House"].products;
  }, [context]);
  Products = useMemo(() => context.House.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/House/"
      activeText="House"
      productsItems={Products}
    />
  );
};

export default House;
