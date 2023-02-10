import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader/AppHeader";
import Router from "../Router";

const AppLayout = () => {
  const { isLoading } = useAuth0();
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
        {isLoading ? (
          <Box
            sx={{
              height: "calc(100vh - 173px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component={'h3'} sx={{display:"flex",alignItems:"center"}}>
              <span>Loading</span>
              <CircularProgress sx={{mx:1}} />
            </Box>
          </Box>
        ) : (
          <>
            <AppHeader></AppHeader>
            <Router></Router>
          </>
        )}
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <AppFooter></AppFooter>
      </Box>
    </Box>
  );
};

export default AppLayout;
