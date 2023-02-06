import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NavLink from "../utils/NavLink";

function Item(props) {
  return (
    <Box component={"li"} sx={{ mb: 1 }}>
      <Button
        variant="text"
        color="secondary"
        sx={{ textTransform: "capitalize", fontSize: "1rem" }}
      >
        <NavLink
          to={props.route}
          className={`${({ isActive }) => {
            return isActive ? "active-category" : undefined;
          }} btn-toggle rounded`}
          sx={{ alignItems: "center" }}
        >
          {({ isActive }) => (
            <Typography
              component={"span"}
              color={isActive ? "primary" : "initial"}
              sx={{ px: 1, fontSize: "1rem" }}
            >
              {props.name}
            </Typography>
          )}
        </NavLink>
      </Button>
    </Box>
  );
}

export default Item;
