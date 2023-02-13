import React, { useContext, useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { store } from "@/store/Context";

let Products = [];
const VideoAudio = () => {
  const context = useContext(store);
  Products = useMemo(() => context.House.Products["video-audio"], []);
  return (
    <div>
      <Breadcrumb
        activeText={"video-audio"}
        subCrumb={true}
        subCrumbName="House"
        subCrumbPath={"House"}
      />
      <ProductList items={Products} subItemPath="video-audio" />
    </div>
  );
};

export default VideoAudio;
