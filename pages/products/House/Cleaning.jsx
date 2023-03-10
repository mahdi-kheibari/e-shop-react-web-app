import React, { useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Cleaning = ({ House }) => {
  const Products = useMemo(() => House.Products["cleaning"], []);
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

import SubCategoryPage from "@/components/category/SubCategoryPage";
import categories from "@/store/categories";
Cleaning.getLayout = function getLayout(page) {
  return (
    <SubCategoryPage
      topItemName={"House"}
      subCategoryItems={categories.allCategories["House"]}
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
import House from "@/store/House";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      House,
    },
  };
};
