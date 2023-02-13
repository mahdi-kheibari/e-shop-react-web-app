import React from "react";
import CategoryPage from "@/components/category/CategoryPage";

const ForGamer = ({ digitalCategory, houseCategory, Products }) => {
  return (
    <CategoryPage
      productsCategory={digitalCategory}
      productsCategory2={houseCategory}
      productsItems={Products}
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      activeText={"For gamers"}
    />
  );
};

export default ForGamer;

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
import { Box, Grid } from "@mui/material";
ForGamer.getLayout = function getLayout(page) {
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

import Digital from "@/store/Digital";
import House from "@/store/House";
import categories from "@/store/categories";
export const getStaticProps = async (ctx) => {
  const products = {};
  const digitalProducts = Digital.Products["laptop"];
  products["laptop"] = digitalProducts;
  const houseProducts = House.Products["video-audio"];
  products["video-audio"] = houseProducts;

  const digital = {};
  const digitalProduct =
    categories.allCategories["Digital products"].products["laptop"];
  digital["laptop"] = digitalProduct;

  const house = {};
  const houseProduct =
    categories.allCategories["House"].products["video-audio"];
  house["video-audio"] = houseProduct;
  return {
    props: {
      digitalCategory: digital,
      houseCategory: house,
      Products: products,
    },
  };
};
