import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useWindowWidth from "../hooks/useWindowWidth";
import { Box } from "@mui/system";
import MainSwiper from "../components/swiper/mainSwiper/MainSwiper";
import { SwiperSlide } from "swiper/react";
import { store } from "../store/Context";
import { Link } from "react-router-dom";

const Index = (props) => {
  const { windowWidth } = useWindowWidth();
  const context = useContext(store);
  return (
    <Container fixed={windowWidth >= 992 ? true:false} maxWidth={windowWidth >= 992?false:"lg"}>
      <Box component={"section"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <MainSwiper rootStyle="categories">
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
              content
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
