import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Box } from "@mui/system";
import MainSwiper from "../../components/swiper/mainSwiper/MainSwiper";
import { SwiperSlide } from "swiper/react";
import { store } from "../../store/Context";
import Link from "../../components/utils/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import DiscountSwiper from "../../components/swiper/discountSwiper/DiscountSwiper";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./index.scss";
import SecondSwiper from "../../components/swiper/secondSwiper/SecondSwiper";
import SecondSwiperItem from "../../components/swiper/secondSwiper/secondSwiperItem/SecondSwiperItem";
import SecondSwiperSm from "../../components/swiper/secondSwiper/secondSwiperSm/SecondSwiperSm";

const Index = (props) => {
  const { windowWidth } = useWindowWidth();
  const context = useContext(store);
  return (
    <Container
      fixed={windowWidth >= 992 ? true : false}
      maxWidth={windowWidth >= 992 ? false : "lg"}
      sx={{ mx: windowWidth >= 992 ? "auto" : "initial" }}
    >
      <Box component={"section"}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <MainSwiper pagination={true} rootStyle="categories">
              {context.mainSliderImg.map((item) => (
                <SwiperSlide key={item.name}>
                  <Link to={"#"}>
                    <img src={item.address} alt={item.name} />
                  </Link>
                </SwiperSlide>
              ))}
            </MainSwiper>
          </Grid>
          {windowWidth >= 992 ? (
            <Grid item xs={4}>
              <Box
                sx={{
                  bgcolor: "white.main",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="discounts"
              >
                <Typography
                  variant="h2"
                  color="danger.main"
                  sx={{ textAlign: "center", pt: 2, fontWeight: "bold", mb: 2 }}
                  className="discounts-title"
                >
                  Special discounts
                </Typography>
                <MainSwiper pagination={false} rootStyle="discounts-slider">
                  {[1, 2, 3, 4].map((item) => (
                    <SwiperSlide key={item}>
                      <Link
                        to={"#"}
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "start",
                          flexDirection: "column",
                          pb: 2,
                        }}
                      >
                        <Box className="second-card-img" sx={{ mx: "auto" }}>
                          <img
                            src={context.discountSliderImg[0].address}
                            alt={context.discountSliderImg[0].name}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                          className="discounts-slider_caption"
                        >
                          <Typography
                            variant="body1"
                            color="initial"
                            sx={{
                              mx: 2,
                              mb: 0,
                            }}
                            className="caption_nameOneLine font-16"
                          >
                            {context.discountSliderImg[0].name}
                          </Typography>
                          <Box>
                            <Typography
                              variant="body1"
                              component={"span"}
                              color="white.main"
                              sx={{
                                bgcolor: "danger.main",
                                px: 1,
                                py: 0.5,
                              }}
                              className="font-16 rounded-pill"
                            >
                              {context.discountSliderImg[0].discountPercent}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="muted.main"
                              component={"span"}
                              sx={{
                                textDecoration: "line-through",
                              }}
                              className="font-14"
                            >
                              {context.discountSliderImg[0].price}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="secondary.main"
                              sx={{
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                              className="font-18"
                            >
                              {context.discountSliderImg[0].withDiscount}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </SwiperSlide>
                  ))}
                </MainSwiper>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ mt: "auto", pb: 2, textTransform: "capitalize" }}
                  component={RouterLink}
                  to={"#"}
                >
                  <Typography
                    variant="body1"
                    color="primary.main"
                    component={"span"}
                    sx={{
                      mx: "auto",
                    }}
                    className="font-20"
                  >
                    See all
                  </Typography>
                </Button>
              </Box>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sx={{
                px: 0,
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "initial",
                maxWidth: "unset !important",
              }}
              className="discounts-small mt-related"
            >
              <DiscountSwiper>
                <SwiperSlide className="swiper-slide-small">
                  <Link
                    to={"#"}
                    sx={{
                      bgcolor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-around",
                      alignItems: "center",
                      color: "white",
                      mt: "auto",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="white.main"
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Special discounts
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      <Typography
                        variant="body1"
                        component={"span"}
                        className="font-20"
                        color="white.main"
                        sx={{ alignSelf: "center" }}
                      >
                        see all
                      </Typography>
                    </Button>
                  </Link>
                </SwiperSlide>
                {[1, 2, 3, 4].map((item) => (
                  <SwiperSlide key={item} className="swiper-slide-small">
                    <Link
                      to={"#"}
                      sx={{
                        height: "100%",
                        bgcolor: "white.main",
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column",
                        p: 2,
                      }}
                    >
                      <Box
                        className="second-card-img-small"
                        sx={{ mx: "auto" }}
                      >
                        <img
                          src={context.discountSliderImg[0].address}
                          alt={context.discountSliderImg[0].name}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          my: "auto",
                        }}
                        className="discounts-slider_caption"
                      >
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{
                            mx: 2,
                            mb: 0,
                            textAlign: "left",
                          }}
                          className="caption_nameOneLine font-14"
                        >
                          {context.discountSliderImg[0].name}
                        </Typography>
                        <Box sx={{ textAlign: "left", mt: 3 }}>
                          <Typography
                            variant="body1"
                            component={"span"}
                            color="white.main"
                            sx={{
                              bgcolor: "danger.main",
                              px: 1,
                              py: 0.5,
                            }}
                            className="font-14 rounded-pill"
                          >
                            {context.discountSliderImg[0].discountPercent}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="muted.main"
                            component={"span"}
                            sx={{
                              textDecoration: "line-through",
                            }}
                            className="font-12"
                          >
                            {context.discountSliderImg[0].price}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="secondary.main"
                            sx={{
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                            className="font-16"
                          >
                            {context.discountSliderImg[0].withDiscount}
                          </Typography>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                ))}
                <SwiperSlide className="swiper-slide-small">
                  <Link
                    to={"#"}
                    sx={{
                      bgcolor: "white.main",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      mt: "auto",
                    }}
                  >
                    <Box sx={{ color: "info.main" }}>
                      <ArrowCircleRightOutlinedIcon
                        color="info.main"
                        sx={{ pb: 1 }}
                      ></ArrowCircleRightOutlinedIcon>
                    </Box>
                    <Typography
                      variant="body1"
                      component={"span"}
                      className="font-20"
                      color="secondary.main"
                      sx={{ alignSelf: "center" }}
                    >
                      See all
                    </Typography>
                  </Link>
                </SwiperSlide>
              </DiscountSwiper>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box
        component={"section"}
        className="bestSellers mt-section"
        sx={{ bgcolor: "white.main" }}
      >
        <Box
          className="bestSellers-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography
            variant="h4"
            color="secondary"
            className="bestSellers-title"
            sx={{
              py: 2,
              display: "inline",
              fontWeight:"bold",
              mb:2
            }}
          >
            Recent bestsellers
          </Typography>
        </Box>
        {windowWidth >= 992 ? (
          <SecondSwiper rootStyle="bestSellers-swiper">
            {[1,2,3,4,5,6,7].map((item) => (
              <SwiperSlide key={item}>
                <Link to={"#"} className="bestSeller">
                <SecondSwiperItem i={context.bestsellersSlider[0]} />
                </Link>
              </SwiperSlide>
            ))}
          </SecondSwiper>
        ) : 
        <SecondSwiperSm rootStyle="bestSellers-swiper">
            {[1,2,3,4,5,6,7].map((item) => (
              <SwiperSlide key={item}>
                <Link to={"#"} className="swiper-slide-small">
                <SecondSwiperItem i={context.bestsellersSlider[0]} />
                </Link>
              </SwiperSlide>
            ))}
        </SecondSwiperSm>
        }
      </Box>
      <Box
        component={"section"}
        className="brands mt-section"
        sx={{ bgcolor: "white.main" }}
      ></Box>
    </Container>
  );
};

export default Index;
