import React from "react";
import { Box } from "@mui/material";
import "./asideLayout.scss";

function AsideLayout({ children }) {
  let childs = children;
  if (!Array.isArray(children)) {
    childs = [children];
  }
  const beforeDivider = childs.find((child) => child.key === "before");
  const afterDivider = childs.find((child) => child.key === "after");
  return (
    <Box
      component={"aside"}
      className="category-aside"
      sx={{ position: "sticky", flexShrink: 0, p: 3, bgcolor: "white.main" }}
    >
      <Box
        sx={{
          pb: 3,
          mb: 3,
          borderBottom: "1px solid white",
          borderBottomColor: "gray.main",
          fontSize: "1rem",
        }}
      >
        Result Categories
      </Box>
      <Box component={"ul"} sx={{ listStyle: "none", pl: 0 }}>
        {beforeDivider ? beforeDivider.props.children : null}
        <Box
          component={"li"}
          sx={{
            borderTop: "1px solid white",
            borderTopColor: "gray.main",
            my: 3,
          }}
        ></Box>
        {afterDivider ? afterDivider.props.children : null}
      </Box>
    </Box>
  );
}

export default AsideLayout;
