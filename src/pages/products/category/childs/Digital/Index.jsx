import React, { useCallback, useContext, useMemo } from "react";
import CategoryPage from "../../../../../components/category/CategoryPage";
import { store } from "../../../../../store/Context";

let Products = {};
const Index = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["Digital products"].products;
  }, [context]);
  Products = useMemo(() => context.Digital.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Digital/"
      activeText="Digital"
      productsItems={Products}
    />
  );
};

export default Index;
