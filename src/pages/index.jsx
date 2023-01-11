import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useWindowWidth from "../hooks/useWindowWidth";

const Index = (props) => {
  const {windowWidth} = useWindowWidth();
  return (
    <Container fixed>
      <section>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            test
          </Grid>
          {windowWidth >= 992 ? (
            <Grid item xs={4}>
              test
            </Grid>
          ) : null}
        </Grid>
      </section>
      <section></section>
    </Container>
  );
};

export default Index;
