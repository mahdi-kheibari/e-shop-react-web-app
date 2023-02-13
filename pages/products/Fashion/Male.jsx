import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const Male = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Fashion.Products["male"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"male"}
        subCrumb={true}
        subCrumbName="Fashion"
        subCrumbPath={"Fashion"}
      />
      <ProductList items={Products} subItemPath="male" />
    </div>
  );
};

export default Male;
