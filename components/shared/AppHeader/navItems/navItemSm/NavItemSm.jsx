import React from "react";
import NavLink from "../../../../utils/NavLink";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const NavItemSm = ({ route, icon, title, fontScale, activeClass }) => {
  return (
    <NavLink
      href={route}
      activeClassName={activeClass ? "nav-item-sm_active" : ""}
    >
      <Button
        variant="text"
        color="secondary"
        className={`btn-white`}
        sx={{display: "flex", alignItems: "center" }}
      >
        <Box sx={{alignSelf: "center",mt:1 }}>
          {icon}
        </Box>
        <span>{title}</span>
      </Button>
    </NavLink>
  );
};

export default NavItemSm;
