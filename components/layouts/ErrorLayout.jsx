import { Box, Container, Button } from "@mui/material";
import React from "react";
import Link from "@/components/utils/Link";

const ErrorLayout = ({statusCode}) => {
  return (
    <Container fixed>
      <Box
        sx={{
          height: "calc(100vh - 173px)",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> page not found</h1>
        <h4>error code: {statusCode}</h4>
        <h4>
          <Link href={"/"} sx={{ mt: 2 }}>
            <Button variant="outlined" color="success">
              go to Home page
            </Button>
          </Link>
        </h4>
      </Box>
    </Container>
  );
};

export default ErrorLayout;
