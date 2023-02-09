import React, { useContext, useEffect, useState } from "react";
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
import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { store } from "../../../../../store/Context";
import AsideLayout from "../../../../../layouts/asideLayout/AsideLayout";
import ProductList from "../../../../../components/productList/ProductList";
import "./index.scss";

const Index = () => {
  const context = useContext(store);
  const [drawer, setdrawer] = useState(false);
  const [allBrands, setAllBrands] = useState([]);
  const [brands, setBrands] = useState({});
  const [specialBrands, setSpecialBrands] = useState({});
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [changeBrands, setChangeBrands] = useState(false);

  useEffect(() => {
    setAllBrands(context.brands);
  }, []);
  useEffect(() => {
    const allProducts = {
      Digital: context.Digital.Products,
      Fashion: context.Fashion.Products,
      Beauty: context.Beauty.Products,
      House: context.House.Products,
    };
    const brandsProducts = {};
    for (let i of allBrands) {
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
    setBrands(brandsProducts);
  }, [context, allBrands]);
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
              className="brand-swiper mb-section"
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
                <Box className="brand-swiper_logo">
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
              <Box className={"brand-swiper_product"}>
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

export default Index;
