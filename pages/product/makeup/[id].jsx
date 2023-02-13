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
      subCrumbName="makeup"
      forBreadcrumbFa="آرایشی"
      subPath="Beauty"
    />
  );
};

export default Id;

import Beauty from "@/store/Beauty";
export const getStaticProps = async ({ params }) => {
  const Product = Beauty.Products["makeup"].find(
    (item) => item.id === params.id
  );
  return {
    props: {
      Product,
      similarProducts: Beauty.Products["makeup"],
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const paths = Beauty.Products["makeup"].map((item) => {
    params: {
      id: item.id;
    }
  });
  return {
    paths,
    fallback: "false",
  };
};