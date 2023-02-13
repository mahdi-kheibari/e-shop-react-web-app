import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const Mobile = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Digital.Products["mobile"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"mobile"}
        subCrumb={true}
        subCrumbName="Digital"
        subCrumbPath={"Digital"}
      />
      <ProductList items={Products} subItemPath="mobile" />
    </div>
  );
};

export default Mobile;
