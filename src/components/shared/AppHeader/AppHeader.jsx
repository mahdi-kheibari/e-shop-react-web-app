import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  OutlinedInput,
  IconButton,
  useTheme,
} from "@mui/material";
import "./appHeader.scss";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
const AppHeader = () => {
  //   const { breakpoints } = useTheme();
  //   console.log(breakpoints.up("lg"));
  return (
    <>
      <AppBar position="sticky" color="white" className="header" sx={{ mb: 4 }}>
        <Toolbar
          sx={({ breakpoints }) => ({
            [breakpoints.up(breakpoints.values.xs)]: {
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
            },
            [breakpoints.up(breakpoints.values.sm)]: {
              px: 1,
            },
          })}
        >
          <Box
            sx={({ breakpoints }) => ({
              [breakpoints.up(breakpoints.values.xs)]: {
                display: "flex",
                order: 1,
                ml: 0,
                mt: 2.5,
                width: "50%",
              },
              [breakpoints.up(breakpoints.values.sm)]: {
                ml: 2,
                mt: "initial",
                width: "auto",
              },
            })}
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
          <Box
            className="header-search"
            sx={({ breakpoints }) => ({
              [breakpoints.up(breakpoints.values.xs)]: {
                px: 1,
                width: "100%",
                order: 3,
                py: 2,
              },
              [breakpoints.up(breakpoints.values.sm)]: {
                width: "50%",
                order: 2,
                py: 0,
              },
            })}
          >
            <ButtonGroup
              variant="contained"
              sx={({ breakpoints }) => ({
                [breakpoints.up(breakpoints.values.xs)]: {
                  boxShadow: "none",
                  width: "100%",
                  height: "calc(1.5em + 0.75rem + 2px)",
                },
              })}
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
            sx={({ breakpoints }) => ({
              [breakpoints.up(breakpoints.values.xs)]: {
                display: "flex",
                order: 2,
              },
              [breakpoints.up(breakpoints.values.sm)]: {
                width: "auto",
                order: 3,
              },
            })}
          >
            <IconButton aria-label="account" size="large" sx={{ py: 0 }}>
              <PersonOutlineOutlined />
            </IconButton>
            <IconButton aria-label="shopping cart" size="large" sx={{ py: 0 }}>
              <ShoppingCartOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
