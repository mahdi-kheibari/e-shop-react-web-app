import React, { useCallback, useMemo } from "react";
import CategoryPage from "@/components/category/CategoryPage";

let Products = {};
const Beauty = ({ beauty, allCategories }) => {
  const productsCategory = useCallback(() => {
    return allCategories["Beauty and health"].products;
  }, []);
  Products = useMemo(() => beauty.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Beauty/"
      activeText="Beauty and health"
      productsItems={Products}
    />
  );
};

export default Beauty;

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
import { Box, Grid } from "@mui/material";
Beauty.getLayout = function getLayout(page) {
  return (
    <Box className="container-fluid">
      <Grid container spacing={4}>
        <Grid item lg={3} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ height: "100%", display: "block" }}>
            <AsideLayout>
              <Box key={"before"}>
                <Item name={"All products"} route="/Products/category/All" />
                <CollapseItem
                  name="Products"
                  items={categories.allCategories}
                />
              </Box>
              <Box key={"after"}>
                <Item
                  name={"Special discounts"}
                  route="/Products/category/Discounts"
                />
                <Item
                  name={"Electronic needs"}
                  route="/Products/category/Electronic"
                />
                <Item name={"For gamers"} route="/Products/category/forGamer" />
                <Item
                  name={"Special brands"}
                  route="/Products/category/Brands"
                />
              </Box>
            </AsideLayout>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          {page}
        </Grid>
      </Grid>
    </Box>
  );
};

import BeautyProduct from "@/store/Beauty";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      beauty: BeautyProduct,
      allCategories: categories.allCategories,
    },
  };
};
