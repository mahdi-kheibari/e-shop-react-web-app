import React from "react";
import { Box, Typography } from "@mui/material";
import useWindowWidth from "../../../../hooks/useWindowWidth";

const SecondSwiperItem = ({ i }) => {
  const { windowWidth } = useWindowWidth();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: 1, pb: 3, px: 3 }}>
      <Box
        className={`${
          windowWidth >= 992 ? "bestSeller-img" : "second-card-img-small"
        }`}
      >
        <img src={i.images[0].address} alt={i.name} />
      </Box>
      <Box
        className="bestSeller-caption"
        sx={{
          my: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          className={`font-14 ${
            i.special ? "caption_nameOneLine" : "caption_nameTwoLine"
          }`}
          sx={{
            textAlign: "left",
            mx: 2,
            mb: 0,
          }}
        >
          {i.name}
        </Typography>
        {i.special ? (
          <Box sx={{ display: "flex", mt: 3 }}>
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
              {i.discount}
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
              {i.realPrice}
            </Typography>
          </Box>
        ) : null}
        <Typography
          variant="body1"
          color="secondary.main"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
          }}
          className="font-16"
        >
          {i.price} toman
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondSwiperItem;
