import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Item from "../../../components/aside/Item";
import AsideLayout from "../../../layouts/asideLayout/AsideLayout";
import { store } from "../../../store/Context";
import CollapseItem from "../../../components/aside/CollapseItem";

const Index = () => {
  const { allCategories } = useContext(store);
  return (
    <Box className="container-fluid">
      <Grid container spacing={4}>
        <Grid item lg={3} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ height: "100%", display: "block" }}>
            <AsideLayout>
              <Box key={"before"}>
                <Item name={"All products"} route="/Products/category/All" />
                <CollapseItem name="Products" items={allCategories} />
              </Box>
              <Box key={"after"}>
                <Item name={"Special discounts"} route="/Products/category/Discounts" />
                <Item name={"Electronic needs"} route="/Products/category/Electronic" />
                <Item name={"For gamers"} route="/Products/category/forGamer" />
                <Item name={"Special brands"} route="/Products/category/Brands" />
              </Box>
            </AsideLayout>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
