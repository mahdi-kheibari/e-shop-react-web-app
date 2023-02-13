import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const Health = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Beauty.Products["health"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"health"}
        subCrumb={true}
        subCrumbName="Beauty"
        subCrumbPath={"Beauty"}
      />
      <ProductList items={Products} subItemPath="health" />
    </div>
  );
};

export default Health;
