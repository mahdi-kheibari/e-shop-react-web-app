import React, { useCallback, useContext, useMemo } from "react";
import CategoryPage from "@/components/category/CategoryPage";
import { store } from "@/store/Context";

let Products = {};
const Beauty = () => {
  const context = useContext(store);
  const productsCategory = useCallback(() => {
    return context.allCategories["Beauty and health"].products;
  }, [context]);
  Products = useMemo(() => context.Beauty.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Beauty/"
      activeText="Beauty and health"
      productsItems={Products}
    />
  );
};

export default Beauty;
