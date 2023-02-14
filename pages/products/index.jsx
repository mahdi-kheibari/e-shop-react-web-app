import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import style from "@/styles/sass/Products.module.scss";
import Link from "@/components/utils/Link";

const Products = ({ allCategories }) => {
  function categoryItems() {
    const Items = [];
    for (const key in allCategories) {
      Items.push(
        <Grid key={key} item xs={12} md={6}>
          <Box className={`${style["categoeies"]}`}>
            <Link
              sx={{
                backgroundImage: "url(" + allCategories[key].address + ")",
              }}
              href={`${allCategories[key].route}`}
            ></Link>
          </Box>
        </Grid>
      );
    }
    return Items;
  }
  return (
    <>
      <Typography
        variant="h3"
        color="secondary.main"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        All categories
      </Typography>
      <Container fixed component={"section"}>
        <Grid container spacing={4}>
          {categoryItems()}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

import categories from "@/store/categories";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      allCategories: categories.allCategories,
    },
  };
};
