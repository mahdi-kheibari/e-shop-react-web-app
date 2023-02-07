import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import SubCategoryPage from "../../../components/category/SubCategoryPage";
import { store } from "../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const digitalCategories = useCallback(() => {
    return context.allCategories["Digital products"];
  }, [context]);
  return (
    <SubCategoryPage
      topItemName={"Digital"}
      subCategoryItems={digitalCategories()}
    >
      <Outlet></Outlet>
    </SubCategoryPage>
  );
};

export default Index;
