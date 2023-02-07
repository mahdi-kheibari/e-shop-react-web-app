import React, { useCallback, useContext } from "react";
import CategoryPage from "../../../../../components/category/CategoryPage";
import { store } from "../../../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["House"].products;
  }, [context]);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/House/"
    />
  );
};

export default Index;
