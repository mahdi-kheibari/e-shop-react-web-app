import React, { useCallback, useContext } from "react";
import CategoryPage from "../../../../../components/category/CategoryPage";
import { store } from "../../../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["Fashion and clothing"].products;
  }, [context]);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Fashion/"
    />
  );
};

export default Index;
