import React, { useCallback, useMemo } from "react";
import CategoryPage from "@/components/category/CategoryPage";

let Products = {};
const Digital = ({ digital, allCategories }) => {
  const productsCategory = useCallback(() => {
    return allCategories["Digital products"].products;
  }, []);
  Products = useMemo(() => digital.Products, []);
  return (
    <CategoryPage
      productsCategory={productsCategory()}
      subRoute="/Products/Digital/"
      activeText="Digital"
      productsItems={Products}
    />
  );
};

export default Digital;

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
import { Box, Grid } from "@mui/material";
Digital.getLayout = function getLayout(page) {
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

import DigitalProduct from "@/store/Digital";
import categories from "@/store/categories";

export const getStaticProps = async (ctx) => {
  return {
    props: {
      digital: DigitalProduct,
      allCategories: categories.allCategories,
    },
  };
};
