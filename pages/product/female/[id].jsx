import React from "react";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import { useRouter } from "next/router";

const Id = ({ Product, similarProducts }) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <SingleProduct
      product={Product}
      similarProducts={similarProducts}
      params={id}
      subCrumbName="female"
      forBreadcrumbFa="زنانه"
      subPath="Fashion"
    />
  );
};

export default Id;

import Fashion from "@/store/Fashion";
export const getStaticProps = async ({ params }) => {
  const Product = Fashion.Products["female"].find(
    (item) => item.id === params.id
  );
  return {
    props: {
      Product,
      similarProducts: Fashion.Products["female"],
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const paths = Fashion.Products["female"].map((item) => {
    params: {
      id: item.id;
    }
  });
  return {
    paths,
    fallback: "false",
  };
};