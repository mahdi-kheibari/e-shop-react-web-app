import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import ProductList from "@/components/productList/ProductList";
import style from "@/styles/sass/Brands.module.scss";

const Brands = ({ allBrands, brands }) => {
  const [drawer, setdrawer] = useState(false);
  const [specialBrands, setSpecialBrands] = useState({});
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [changeBrands, setChangeBrands] = useState(false);
  function setToCheckedCategory(event) {
    if (event.target.checked) {
      const newCheckedBrands = [...checkedBrands, event.target.value];
      setCheckedBrands(newCheckedBrands);
    } else {
      const newCheckedBrands = checkedBrands.map((item) => {
        if (item !== event.target.value) {
          return item;
        }
      });
      setCheckedBrands(newCheckedBrands);
    }
  }
  function filtredCategory() {
    if (!checkedBrands.some((i) => i !== undefined)) {
      setChangeBrands(false);
    } else {
      const SpecialBrands = {};
      for (let Brand of checkedBrands) {
        SpecialBrands[Brand] = brands[Brand];
      }
      setSpecialBrands(SpecialBrands);
      setChangeBrands(true);
    }
  }
  useEffect(() => {
    if (!checkedBrands.some((i) => i !== undefined)) {
      setChangeBrands(false);
    } else {
      filtredCategory();
    }
  }, [checkedBrands]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} xl={10}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Breadcrumb activeText={"Special brands"} />
          <Box sx={{ display: { xl: "none" }, mr: 1, flexShrink: 0 }}>
            <Button
              variant="contained"
              color="white"
              sx={{
                px: 2,
                mb: 1,
                color: "secondary.main",
                boxShadow: "none",
                textTransform: "capitalize",
              }}
              onClick={() => {
                setdrawer(true);
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                className="font-12 font-sm-14"
              >
                <MenuOutlinedIcon sx={{ px: 1 }} />
                <span>advanced filter</span>
              </Box>
            </Button>
            <Drawer
              anchor="left"
              open={drawer}
              onClose={() => setdrawer(false)}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    p: 2,
                    bgcolor: "light.main",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                      className={"font-20"}
                    >
                      Result Categories
                    </Box>
                    <IconButton color="danger" onClick={() => setdrawer(false)}>
                      <CloseOutlinedIcon />
                    </IconButton>
                  </Box>
                  <hr />
                  <Box
                    component={"ul"}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mb: "auto",
                      alignItems: "flex-start",
                      p: 0,
                    }}
                    className={"nav"}
                  >
                    {allBrands.map((item) => (
                      <Box component={"li"} className={"nav-item"} key={item}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={item}
                                onChange={(e) => {
                                  setToCheckedCategory(e);
                                  filtredCategory();
                                  setdrawer(false);
                                }}
                                checked={
                                  checkedBrands.some((i) => i === item)
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={item}
                          />
                        </FormGroup>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Box>
        {Object.keys(changeBrands ? specialBrands : brands).map((key) =>
          key !== "undefined" ? (
            <Box
              className={`${style["brand-swiper"]} mb-section`}
              sx={{ py: 2, bgcolor: "white.main" }}
              key={key}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
                id={key}
              >
                <Box className={`${style["brand-swiper_logo"]}`}>
                  <img
                    src={"/images/brand-slider/" + key + ".jpg"}
                    alt={key}
                    className="rounded"
                  />
                </Box>
                <Box component={"h2"} sx={{ m: 0 }}>
                  {key}
                </Box>
              </Box>
              <Box className={`${style["brand-swiper_product"]}`}>
                <ProductList
                  items={
                    changeBrands
                      ? { ...specialBrands[key] }
                      : { ...brands[key] }
                  }
                />
              </Box>
            </Box>
          ) : null
        )}
      </Grid>
      <Grid xl={2} sx={{ display: { xs: "none", xl: "block" }, pl: 3 }}>
        <AsideLayout>
          <Box key={"before"}>
            {allBrands.map((item) => (
              <Box component={"li"} className={"nav-item"} key={item}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={item}
                        onChange={(e) => {
                          setToCheckedCategory(e);
                          filtredCategory();
                        }}
                      />
                    }
                    label={item}
                  />
                </FormGroup>
              </Box>
            ))}
          </Box>
        </AsideLayout>
      </Grid>
    </Grid>
  );
};

export default Brands;

import categories from "@/store/categories";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
Brands.getLayout = function getLayout(page) {
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
import Fashion from "@/store/Fashion";
import Beauty from "@/store/Beauty";
import House from "@/store/House";
export const getStaticProps = async (ctx) => {
  const allProducts = {
    Digital: Digital.Products,
    Fashion: Fashion.Products,
    Beauty: Beauty.Products,
    House: House.Products,
  };
  const brandsProducts = {};
  for (let i of categories.brands) {
    brandsProducts[i] = {};
    function filteredProduct(Products) {
      for (let key in Products) {
        const filtered = Products[key].filter((item) => item.brand === i);
        brandsProducts[i][key] = filtered;
      }
    }
    for (let key in allProducts) {
      filteredProduct(allProducts[key]);
    }
  }
  return {
    props: {
      allBrands: categories.brands,
      brands: brandsProducts,
    },
  };
};
