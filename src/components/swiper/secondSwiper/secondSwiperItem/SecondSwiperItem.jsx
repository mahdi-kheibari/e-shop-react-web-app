import React from "react";
import { Box, Typography } from "@mui/material";
import useWindowWidth from "../../../../hooks/useWindowWidth";

const SecondSwiperItem = ({ i, similar }) => {
  const { windowWidth } = useWindowWidth();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: 1, pb: 3, px: 3 }}>
      <Box
        className={`${
          windowWidth >= 992 ? "bestSeller-img" : "second-card-img-small"
        }`}
      >
        <img src={similar ? i.images[0].address : i.address} alt={i.name} />
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
        <Box className="font-16" sx={{ fontWeight: "bold" }}>
          {i.price}
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSwiperItem;
