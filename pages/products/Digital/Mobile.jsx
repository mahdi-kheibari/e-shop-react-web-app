import React, { useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Mobile = ({ Digital }) => {
  const Products = useMemo(() => Digital.Products["mobile"], []);
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

import SubCategoryPage from "@/components/category/SubCategoryPage";
import categories from "@/store/categories";
Mobile.getLayout = function getLayout(page) {
  return (
    <SubCategoryPage
      topItemName={"Digital"}
      subCategoryItems={categories.allCategories["Digital products"]}
    >
      {page}
    </SubCategoryPage>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import Digital from "@/store/Digital";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      Digital,
    },
  };
};
