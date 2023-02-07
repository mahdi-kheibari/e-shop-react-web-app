import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import SubCategoryPage from "../../../components/category/SubCategoryPage";
import { store } from "../../../store/Context";

const Index = () => {
  const context = useContext(store);
  const houseCategories = useCallback(() => {
    return context.allCategories["House"];
  }, [context]);
  return (
    <SubCategoryPage
      topItemName={"House"}
      subCategoryItems={houseCategories()}
    >
      <Outlet></Outlet>
    </SubCategoryPage>
  );
};

export default Index;
