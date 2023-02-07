import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "../utils/Link";

function CategoryList({ products, products2, subRoute, subRoute2 }) {
  return (
    <Box className="category" sx={{ width: "100%", bgcolor: "white.main" }}>
      <Typography
        variant="h6"
        color="secondary.main"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Category
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(products).map((key) => (
          <Link
            key={key}
            to={`${subRoute}${key}`}
            className="category-item"
            sx={{
              bgcolor: "light.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mx: 4,
            }}
          >
            <Box className="category-item_img">
              <img src={products[key].cover} alt={key} />
            </Box>
            <Box sx={{ fontWeight: "bold", textAlign: "center" }}>{key}</Box>
          </Link>
        ))}
        {products2 ? (
          <>
            {Object.keys(products2).map((key) => (
              <Link
                key={key}
                to={`${subRoute2}${key}`}
                className="category-item"
                sx={{
                  bgcolor: "light.main",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: 4,
                }}
              >
                <Box className="category-item_img">
                  <img src={products2[key].cover} alt={key} />
                </Box>
                <Box sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {key}
                </Box>
              </Link>
            ))}
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default CategoryList;
