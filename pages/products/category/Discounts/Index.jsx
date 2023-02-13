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
import ProductList from "@/components/productList/ProductList";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";

const Discounts = ({ allCategories, Products }) => {
  const [drawer, setdrawer] = useState(false);
  const [discountProducts, setDiscountProducts] = useState({});
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [changeProducts, setChangeProducts] = useState(false);

  function setToCheckedCategory(event) {
    if (event.target.checked) {
      const newCheckedCategory = [...checkedCategory, event.target.value];
      setCheckedCategory(newCheckedCategory);
    } else {
      const newCheckedCategory = checkedCategory.map((item) => {
        if (item !== event.target.value) {
          return item;
        }
      });
      setCheckedCategory(newCheckedCategory);
    }
  }
  function filtredCategory() {
    const filteredProducts = {};
    if (!checkedCategory.some((i) => i !== undefined)) {
      setChangeProducts(false);
    } else {
      for (let category of checkedCategory) {
        for (let i in Products) {
          if (Products[i].some((item) => item.category === category)) {
            filteredProducts[i] = Products[i].filter(
              (item) => item.category === category
            );
          }
        }
      }
      setDiscountProducts(filteredProducts);
      setChangeProducts(true);
    }
  }
  useEffect(() => {
    if (!checkedCategory.some((i) => i !== undefined)) {
      setChangeProducts(false);
    } else {
      filtredCategory();
    }
  }, [checkedCategory]);
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
          <Breadcrumb activeText="Special discounts" />
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
                      to={"/"}
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
                    {allCategories.map((item) => (
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
                                  checkedCategory.some((i) => i === item)
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
        <ProductList items={changeProducts ? discountProducts : Products} />
      </Grid>
      <Grid item xl={2} sx={{ display: { xs: "none", xl: "block" } }}>
        <AsideLayout>
          <Box key={"before"}>
            {allCategories.map((item) => (
              <FormGroup key={item}>
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
            ))}
          </Box>
        </AsideLayout>
      </Grid>
    </Grid>
  );
};

export default Discounts;

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
Discounts.getLayout = function getLayout(page) {
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
import categories from "@/store/categories";
export const getStaticProps = async (ctx) => {
  const products = {};
  function filteredProduct(product, category) {
    const Products = product;
    for (let key in Products) {
      const filtered = Products[key]
        .filter((item) => item.special === true)
        .map((item) => {
          return {
            ...item,
            category: category,
          };
        });
      products[key] = filtered;
    }
  }
  const allProducts = {
    Digital: Digital.Products,
    Fashion: Fashion.Products,
    Beauty: Beauty.Products,
    House: House.Products,
  };
  for (let key in allProducts) {
    filteredProduct(allProducts[key], key);
  }
  return {
    props: {
      allCategories: categories,
      Products: products,
    },
  };
};
