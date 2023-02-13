import React, { useMemo } from "react";
import ProductList from "@/components/productList/ProductList";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Female = ({ Fashion }) => {
  const Products = useMemo(() => Fashion.Products["female"], []);
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

import SubCategoryPage from "@/components/category/SubCategoryPage";
import categories from "@/store/categories";
Female.getLayout = function getLayout(page) {
  return (
    <SubCategoryPage
      topItemName={"Fashion"}
      subCategoryItems={categories.allCategories["Fashion and clothing"]}
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
import Fashion from "@/store/Fashion";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      Fashion,
    },
  };
};
