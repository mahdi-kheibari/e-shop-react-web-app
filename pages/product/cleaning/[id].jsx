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
      subCrumbName="cleaning"
      forBreadcrumbFa="نظافت"
      subPath="House"
    />
  );
};

export default Id;

import House from "@/store/House";
export const getStaticProps = async ({ params }) => {
  const Product = House.Products["cleaning"].find(
    (item) => item.id === params.id
  );
  return {
    props: {
      Product,
      similarProducts: House.Products["cleaning"],
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const paths = House.Products["cleaning"].map((item) => {
    params: {
      id: item.id;
    }
  });
  return {
    paths,
    fallback: "false",
  };
};
