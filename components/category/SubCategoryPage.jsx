import { Box, Grid } from "@mui/material";
import React from "react";
import AsideLayout from "../layouts/asideLayout/AsideLayout";
import Item from "../aside/Item";
import CollapseItem from "../aside/CollapseItem";
import CategoryListSm from "../category/CategoryListSm";

const SubCategoryPage = ({ children, subCategoryItems, topItemName }) => {
  return (
    <Box className="container-fluid">
      <Grid container spacing={4}>
        <Grid item lg={3} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
          <AsideLayout>
            <Box key={"before"}>
              <Item name={topItemName} route={subCategoryItems.route}></Item>
              <CollapseItem
                name={"Products"}
                items={subCategoryItems.products}
              ></CollapseItem>
            </Box>
          </AsideLayout>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          {children}
        </Grid>
      </Grid>
      <CategoryListSm products={subCategoryItems.products} />
    </Box>
  );
};

export default SubCategoryPage;
