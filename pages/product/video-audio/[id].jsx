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
      subCrumbName="video-audio"
      forBreadcrumbFa="صوتی و تصویری"
      subPath="House"
    />
  );
};

export default Id;

import House from "@/store/House";
export const getStaticProps = async ({ params }) => {
  const Product = House.Products["video-audio"].find(
    (item) => item.id === params.id
  );
  return {
    props: {
      Product,
      similarProducts: House.Products["video-audio"],
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const paths = House.Products["video-audio"].map((item) => {
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
