import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const Makeup = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Beauty.Products["makeup"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"makeup"}
        subCrumb={true}
        subCrumbName="Beauty"
        subCrumbPath={"Beauty"}
      />
      <ProductList items={Products} subItemPath="makeup" />
    </div>
  );
};

export default Makeup;
