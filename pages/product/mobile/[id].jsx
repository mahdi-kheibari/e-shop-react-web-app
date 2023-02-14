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
      subCrumbName="mobile"
      forBreadcrumbFa="گوشی موبایل"
      subPath="Digital"
    />
  );
};

export default Id;

import Digital from "@/store/Digital";
export const getStaticProps = async ({ params }) => {
  const Product = Digital.Products["mobile"].find(
    (item) => item.id === params.id
  );
  return {
    props: {
      Product,
      similarProducts: Digital.Products["mobile"],
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const paths = Digital.Products["mobile"].map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
