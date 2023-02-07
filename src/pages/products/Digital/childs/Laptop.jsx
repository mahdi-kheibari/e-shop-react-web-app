import React, { useContext, useMemo } from "react";
import ProductList from "../../../../components/productList/ProductList";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { store } from "../../../../store/Context";

let Products = [];
const Laptop = () => {
  const context = useContext(store);
  Products = useMemo(() => context.Digital.Products["laptop"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"laptop"}
        subCrumb={true}
        subCrumbName="Digital"
        subCrumbPath={"Digital"}
      />
      <ProductList items={Products} subItemPath="laptop" />
    </div>
  );
};

export default Laptop;
