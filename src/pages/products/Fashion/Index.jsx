import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import SubCategoryPage from "../../../components/category/SubCategoryPage";
import { store } from "../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const fashionCategories = useCallback(() => {
    return context.allCategories["Fashion and clothing"];
  }, [context]);
  return (
    <SubCategoryPage
      topItemName={"Fashion"}
      subCategoryItems={fashionCategories()}
    >
      <Outlet></Outlet>
    </SubCategoryPage>
  );
};

export default Index;
