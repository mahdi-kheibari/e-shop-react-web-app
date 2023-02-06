import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  OutlinedInput,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./appHeader.scss";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import NavItems from "./navItems/NavItems";
const AppHeader = () => {
  const [drawer, setdrawer] = useState(false);
  return (
    <>
      <AppBar position="sticky" color="white" className="header" sx={{ mb: 4 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            px: { sm: 1 },
          }}
        >
          <Box sx={{display:"flex",alignItems:"center"}}>
            <IconButton
              color="secondary"
              sx={{ display: { xs: "flex", sm: "none" },pb:0 }}
              onClick={() => setdrawer(true)}
            >
              <MenuOutlinedIcon sx={{textAlign:"center"}} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                order: 1,
                ml: { xs: 0, sm: 2 },
                mt: { xs: 2.5, sm: "initial" },
                width: { xs: "50%", sm: "auto" },
              }}
              className="header-brand"
            >
              <img src="/logo192.png" height="30px" alt="logo" />
              &nbsp;
              <Typography
                variant="body1"
                color="primary"
                sx={{ display: "flex", fontWeight: "bold" }}
                className="font-20"
              >
                <Box component={"span"} sx={{ color: "secondary.main" }}>
                  E-
                </Box>
                Shop
              </Typography>
            </Box>
          </Box>
          <Box
            className="header-search"
            sx={{
              px: 1,
              width: { xs: "100%", sm: "50%" },
              order: { xs: 3, sm: 2 },
              py: { xs: 2, sm: 0 },
            }}
          >
            <ButtonGroup
              variant="contained"
              sx={{
                boxShadow: "none",
                width: "100%",
                height: "calc(1.5em + 0.75rem + 2px)",
              }}
            >
              <OutlinedInput
                placeholder="Search"
                sx={{
                  width: "100%",
                  mt: 1,
                  py: 0,
                  backgroundColor: "light.main",
                  color: "secondary.main",
                }}
              />
              <Button
                size="small"
                sx={{ height: "calc(1.5em + 0.75rem + 2px)", alignSelf: "end" }}
              >
                <Search />
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            className="header-other"
            sx={{
              display: "flex",
              order: { xs: 2, sm: 3 },
              width: { sm: "auto" },
            }}
          >
            <IconButton aria-label="account" size="large" sx={{ py: 0 }}>
              <PersonOutlineOutlined />
            </IconButton>
            <IconButton aria-label="shopping cart" size="large" sx={{ py: 0 }}>
              <ShoppingCartOutlined />
            </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={drawer}
            onClose={() => setdrawer(false)}
          ></Drawer>
        </Toolbar>
        <NavItems></NavItems>
      </AppBar>
    </>
  );
};

export default AppHeader;
