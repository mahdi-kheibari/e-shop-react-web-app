import React from "react";
import CategoryPage from "@/components/category/CategoryPage";

const Electronic = ({ digitalCategory, houseCategory, Products }) => {
  return (
    <CategoryPage
      productsCategory={digitalCategory}
      productsCategory2={houseCategory}
      productsItems={Products}
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      activeText={"Electronic needs"}
    />
  );
};

export default Electronic;

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
import { Box, Grid } from "@mui/material";
Electronic.getLayout = function getLayout(page) {
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
  const digitalProducts = Digital.Products;
  const houseProducts = House.Products;
  for (let key in digitalProducts) {
    products[key] = digitalProducts[key];
  }
  for (let key in houseProducts) {
    products[key] = houseProducts[key];
  }

  const digital = categories.allCategories["Digital products"].products;
  const house = categories.allCategories["House"].products;
  return {
    props: {
      digitalCategory: digital,
      houseCategory: house,
      Products: products,
    },
  };
};
