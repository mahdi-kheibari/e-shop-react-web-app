import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "../utils/NavLink";

function Item(props) {
  const router = useRouter();
  return (
    <Box component={"li"} sx={{ mb: 1 }}>
      <Button
        variant="text"
        color="secondary"
        sx={{ textTransform: "capitalize", fontSize: "1rem" }}
      >
        <NavLink
          href={props.route}
          activeClassName="active-category"
          className={`btn-toggle rounded`}
        >
          <Typography
            component={"span"}
            color={router.pathname === props.route ? "primary" : "initial"}
            sx={{ px: 1, fontSize: "1rem" }}
          >
            {props.name}
          </Typography>
        </NavLink>
      </Button>
    </Box>
  );
}

export default Item;
