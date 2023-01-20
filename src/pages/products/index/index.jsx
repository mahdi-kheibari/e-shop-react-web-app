import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { store } from "../../../store/Context";
import Link from "../../../components/utils/Link";
import "./index.scss";
const Index = () => {
  const context = useContext(store);
  function categoryItems() {
    const Items = [];
    for (const key in context.allCategories) {
      Items.push(
        <Grid key={key} item xs={12} md={6}>
          <Box className="category" sx={{ my: 2 }}>
            <Link
              to={"#"}
              sx={{
                backgroundImage:
                  "url(" + context.allCategories[key].address + ")",
              }}
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

export default Index;
