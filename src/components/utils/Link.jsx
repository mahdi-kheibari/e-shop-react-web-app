import React from "react";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Link = ({children,...other}) => {
  return (
    <MuiLink component={RouterLink} underline="none" {...other}>
      {children}
    </MuiLink>
  );
};

export default Link;
