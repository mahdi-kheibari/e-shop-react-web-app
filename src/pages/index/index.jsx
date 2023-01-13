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
import "./index.scss";

const Index = (props) => {
  const { windowWidth } = useWindowWidth();
  const context = useContext(store);
  return (
    <Container
      fixed={windowWidth >= 992 ? true : false}
      maxWidth={windowWidth >= 992 ? false : "lg"}
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
                  sx={{ mt: "auto", pb: 2,textTransform:"capitalize" }}
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
            <Grid item xs={12} sx={{ px: 0 }}>
              content
            </Grid>
          )}
        </Grid>
      </Box>
      <Box
        component={"section"}
        className="bestSellers"
        sx={{ bgcolor: "white.main", mt: 9.25 }}
      ></Box>
      <Box
        component={"section"}
        className="brands"
        sx={{ bgcolor: "white.main", mt: 9.25 }}
      ></Box>
    </Container>
  );
};

export default Index;
