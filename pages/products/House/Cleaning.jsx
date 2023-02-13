import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const Cleaning = () => {
  const context = useContext(store);
  Products = useMemo(() => context.House.Products["cleaning"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"cleaning"}
        subCrumb={true}
        subCrumbName="House"
        subCrumbPath={"House"}
      />
      <ProductList items={Products} subItemPath="cleaning" />
    </div>
  );
};

export default Cleaning;
