import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import AppFooter from "../components/shared/AppFooter";
import AppHeader from "../components/shared/AppHeader/AppHeader";

const AppLayout = ({ children }) => {
  const { error, isLoading } = useUser();
//   let loading = false;
//   const [ignoreLoading, setIgnoreLoading] = useState(loading);
//   setTimeout(() => {
//     if (isLoading) {
//       setIgnoreLoading(true);
//     }
//   }, 5000);
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
            <Box
              component={"h3"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span>Loading</span>
              <CircularProgress sx={{ mx: 1 }} />
            </Box>
          </Box>
        ) :(error?(<div>{error.message}</div>):(
            <>
              <AppHeader></AppHeader>
              {children}
            </>
          )) }
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <AppFooter></AppFooter>
      </Box>
    </Box>
  );
};

export default AppLayout;
