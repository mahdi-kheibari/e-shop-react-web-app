import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import SubCategoryPage from "../../../components/category/SubCategoryPage";
import { store } from "../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const beautyCategories = useCallback(() => {
    return context.allCategories["Beauty and health"];
  }, [context]);
  return (
    <SubCategoryPage
      topItemName={"Beauty"}
      subCategoryItems={beautyCategories()}
    >
      <Outlet></Outlet>
    </SubCategoryPage>
  );
};

export default Index;
