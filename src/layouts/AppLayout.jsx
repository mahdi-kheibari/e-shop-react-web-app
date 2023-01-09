import { Box } from "@mui/material";
import React from "react";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader/AppHeader";

const AppLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: "1 0 auto" }}>
        <AppHeader></AppHeader>
        <div></div>
      </Box>
      <Box sx={{flexShrink: 0}}>
        <AppFooter></AppFooter>
      </Box>
    </Box>
  );
};

export default AppLayout;
