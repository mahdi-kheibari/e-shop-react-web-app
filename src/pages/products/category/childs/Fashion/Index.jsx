import React, { useCallback, useContext, useMemo } from "react";
import CategoryPage from "../../../../../components/category/CategoryPage";
import { store } from "../../../../../store/Context";

let Products = {};
const Index = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["Fashion and clothing"].products;
  }, [context]);
  Products = useMemo(() => context.Fashion.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Fashion/"
      activeText="Fashion and clothing"
      productsItems={Products}
    />
  );
};

export default Index;
