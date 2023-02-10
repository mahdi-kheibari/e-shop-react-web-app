import React, { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {
  Box,
  Grid,
  OutlinedInput,
  Typography,
  Button,
  FormControl,
  Container,
} from "@mui/material";
import Link from "../utils/Link";
import SecondSwiper from "../swiper/secondSwiper/SecondSwiper";
import { SwiperSlide } from "swiper/react";
import SecondSwiperItem from "../swiper/secondSwiper/secondSwiperItem/SecondSwiperItem";
import SecondSwiperSm from "../swiper/secondSwiper/secondSwiperSm/SecondSwiperSm";
import "./singleProduct.scss";
import Toast from "../toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/cart/actions";
import { changeSumTotal } from "../../store/cart/slice";

const SingleProduct = ({
  product,
  similarProducts,
  params,
  subCrumbName,
  forBreadcrumbFa,
  subPath,
}) => {
  const { windowWidth } = useWindowWidth();
  const [currentImg, setCurrentImg] = useState("");
  const [count, setCount] = useState(1);
  const [successToast, setSuccessToastToast] = useState(false);
  const [warningToast, setWarningToast] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setCurrentImg(product.images[0].address);
  }, [product]);
  function addToCart() {
    const newProduct = { ...product, category: subCrumbName };
    const result = dispatch(
      actions.addItem(cartItems, {
        product: newProduct,
        count: count,
      })
    );
    if (result) {
      dispatch(changeSumTotal());
      dispatch(actions.saveCart(cartItems));
      setSuccessToastToast(true);
    } else {
      setWarningToast(true);
    }
  }
  return (
    <Box
      sx={{ mt: { xs: 0, md: 8 }, "& .breadcrumb": { mb: { xs: 4, md: 0 } } }}
    >
      {windowWidth <= 768 ? (
        <Box sx={{ ml: 3, "& .breadcrumb": { bgcolor: "transparent", pt: 0 } }}>
          <Breadcrumb
            activeText={params}
            subCrumbSingle={true}
            subPath={subPath}
            subCrumbName={subCrumbName}
            subCrumbPath={subCrumbName}
          />
        </Box>
      ) : null}
      <Box sx={{ bgcolor: "white.main", px: 2, pb: 2 }}>
        <section>
          <Grid
            container
            spacing={4}
            sx={{ pt: 2, px: 2, "& .MuiGrid-item": { pt: 2 } }}
          >
            <Grid item xs={12} md={5} sx={{ flexShrink: { md: 0 } }}>
              {windowWidth < 768 ? (
                <Box className="product-information_name" sx={{ mb: 2 }}>
                  <Typography
                    variant="h2"
                    color="secondary"
                    className="font-18"
                  >
                    {product.name}
                  </Typography>
                </Box>
              ) : null}
              <Grid container spacing={2} className="view-product">
                <Grid item xs={2}>
                  <Box
                    component={"ul"}
                    className={"gallery-preview"}
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      display: "flex",
                      flexDirection: "column",
                      mx: 2,
                    }}
                  >
                    {product.images.map((i) => (
                      <Box
                        component={"li"}
                        key={i.address}
                        className={`${
                          i.address === currentImg ? "current" : ""
                        }`}
                        sx={{ my: 2, p: 1 }}
                        onClick={() => setCurrentImg(i.address)}
                      >
                        <img src={i.address} alt={product.name} />
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box className="gallery-current">
                    <img src={currentImg} alt={product.name} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className={`${windowWidth < 768 ? "container" : ""} my-related`}
              sx={{ flexShrink: { md: 1 }, mt: { md: 0 } }}
            >
              {windowWidth >= 768 ? (
                <Box
                  sx={{
                    ml: 3,
                    "& .breadcrumb": { bgcolor: "transparent", pt: 0 },
                  }}
                  className="single-breadcrumb"
                >
                  <Breadcrumb
                    activeText={params}
                    subCrumbSingle={true}
                    subPath={subPath}
                    subCrumbName={subCrumbName}
                    subCrumbPath={subCrumbName}
                  />
                </Box>
              ) : null}
              <Box className="product-information">
                {windowWidth >= 768 ? (
                  <Box className="product-information_name">
                    <Typography
                      variant="h2"
                      color="secondary"
                      className="font-24"
                    >
                      {product.name}
                    </Typography>
                  </Box>
                ) : null}
                <Box sx={{ height: "100%", mt: 2 }}>
                  <Box sx={{ height: "100%" }}>
                    <Typography
                      variant="body1"
                      sx={{ my: "auto", textAlign: "justify" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quibusdam impedit neque magni officiis aspernatur? Omnis
                      culpa vitae quaerat modi animi praesentium quia quisquam
                      vel reiciendis nisi ipsam, distinctio rerum maiores.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                height: "100%",
                flexShrink: { md: 2 },
                pt: 0,
              }}
              className="position-md-sticky"
            >
              <Box className="product-information container-md">
                <Box
                  className="product-information-cart"
                  sx={{ bgcolor: "light.main", p: 4 }}
                >
                  <Box
                    sx={{
                      pb: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className={"font-18"}
                  >
                    <span>Seller</span>
                    <span>Lorem...</span>
                  </Box>
                  <Box component={"hr"} sx={{ m: 0 }} />
                  <Box
                    sx={{
                      py: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component={"label"}
                      className="font-18"
                      sx={{ flexShrink: 0 }}
                    >
                      Quantity :
                    </Box>
                    <FormControl
                      className="product-information_input search_box rounded"
                      sx={{ width: "70%" }}
                    >
                      <OutlinedInput
                        placeholder="Search"
                        sx={{
                          flexShrink: 3,
                          py: 0,
                          backgroundColor: "white.main",
                          color: "secondary.main",
                        }}
                        type="number"
                        min={1}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box component={"hr"} sx={{ m: 0 }} />
                  <Box>
                    <Box sx={{ py: 2 }}>
                      {product.special ? (
                        <Box sx={{ textAlign: "left", display: "flex" }}>
                          <Box
                            component={"span"}
                            className="font-16 font-md-18 rounded-pill"
                            sx={{
                              color: "white.main",
                              bgcolor: "danger.main",
                              px: 1,
                              py: 0.5,
                            }}
                          >
                            {product.discount}
                          </Box>
                          <Box
                            component={"span"}
                            className="font-14 font-md-16"
                            sx={{
                              color: "secondary.main",
                              textDecoration: "line-through",
                              m: 0,
                            }}
                          >
                            {product.realPrice}
                          </Box>
                        </Box>
                      ) : null}
                      <Box
                        sx={{ textAlign: "left", fontWeight: "bold" }}
                        className="font-18 font-md-20"
                      >
                        <Box component={"span"} sx={{ fontWeight: "normal" }}>
                          Price :
                        </Box>
                        {product.price}
                        <Box
                          component={"span"}
                          sx={{ fontWeight: "normal" }}
                          className="font-14 font-md-16"
                        >
                          toman
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        color: "white.main",
                        display: "block",
                        fontWeight: "bold",
                        boxShadow: "none",
                      }}
                      fullWidth
                      onClick={() => addToCart()}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section>
        <Container fixed>
          <Box
            component={"section"}
            className="similars container mt-section"
            sx={{ bgcolor: "white.main" }}
          >
            <Box
              className="similars-header"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography
                variant="h2"
                color="secondary"
                className="similars-title font-20"
                sx={{
                  py: 2,
                  display: "inline",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Similar Products
              </Typography>
            </Box>

            {windowWidth >= 992 ? (
              <SecondSwiper rootStyle="bestSellers-swiper">
                {similarProducts
                  .filter((i) => i.id !== product.id)
                  .map((i) => (
                    <SwiperSlide key={i.name}>
                      <Link
                        to={`/Product/${subCrumbName}/${i.id}`}
                        className="bestSeller"
                      >
                        <SecondSwiperItem i={i} />
                      </Link>
                    </SwiperSlide>
                  ))}
              </SecondSwiper>
            ) : (
              <SecondSwiperSm rootStyle="bestSellers-swiper">
                {similarProducts
                  .filter((i) => i.id !== product.id)
                  .map((i) => (
                    <SwiperSlide key={i.name}>
                      <Link
                        to={`/Product/${subCrumbName}/${i.id}`}
                        className="swiper-slide-small"
                      >
                        <SecondSwiperItem i={i} />
                      </Link>
                    </SwiperSlide>
                  ))}
              </SecondSwiperSm>
            )}
          </Box>
        </Container>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            bottom: 0,
            left: 0,
            bgcolor: "white.main",
            p: 3,
            width: "100%",
            zIndex: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white.main",
              display: "block",
              fontWeight: "bold",
              boxShadow: "none",
            }}
            fullWidth
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
      <Toast
        type={"success"}
        massege={"Successfully added to cart"}
        state={successToast}
        setState={(val) => setSuccessToastToast(val)}
      />
      <Toast
        type={"warning"}
        massege={"This product is in your shopping cart"}
        state={warningToast}
        setState={(val) => setWarningToast(val)}
      />
    </Box>
  );
};

export default SingleProduct;
