import React, { useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Health = ({ Beauty }) => {
  const Products = useMemo(() => Beauty.Products["health"], []);
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

import SubCategoryPage from "@/components/category/SubCategoryPage";
import categories from "@/store/categories";
Health.getLayout = function getLayout(page) {
  return (
    <SubCategoryPage
      topItemName={"Beauty"}
      subCategoryItems={categories.allCategories["Beauty and health"]}
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
import Beauty from "@/store/Beauty";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      Beauty,
    },
  };
};
