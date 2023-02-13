import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];

const Female = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Fashion.Products['female'], []);
  return (
    <div>
      <Breadcrumb
        activeText={"female"}
        subCrumb={true}
        subCrumbName="Fashion"
        subCrumbPath={"Fashion"}
      />
      <ProductList items={Products} subItemPath="female" />
    </div>
  );
};

export default Female;
