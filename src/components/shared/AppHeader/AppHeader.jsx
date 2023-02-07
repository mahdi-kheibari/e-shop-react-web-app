import React, { useContext, useState } from "react";
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
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import NavItems from "./navItems/NavItems";
import Link from "../../utils/Link";
import NavLink from "../../utils/NavLink";
import CollapseItem from "../../aside/CollapseItem";
import { store } from "../../../store/Context";
import NavItemSm from "./navItems/navItemSm/NavItemSm";
import "./appHeader.scss";
const AppHeader = () => {
  const [drawer, setdrawer] = useState(false);
  const { allCategories } = useContext(store);
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="secondary"
              sx={{ display: { xs: "flex", sm: "none" }, pb: 0 }}
              onClick={() => setdrawer(true)}
            >
              <MenuOutlinedIcon sx={{ textAlign: "center" }} />
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
              <Link to={"/"} sx={{ display: "flex" }}>
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
              </Link>
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
          <Drawer anchor="left" open={drawer} onClose={() => setdrawer(false)}>
            <Box
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  flexGrow: 1,
                  p: 2,
                  bgcolor: "light.main",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link
                    to={"/"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                    className={"font-20"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        alignSelf: "center",
                      }}
                    >
                      <img src="/logo192.png" height="30px" alt="logo" />
                      &nbsp;
                      <Typography
                        variant="body1"
                        color="primary"
                        sx={{ display: "flex", fontWeight: "bold" }}
                        className="font-20"
                      >
                        <Box
                          component={"span"}
                          sx={{ color: "secondary.main" }}
                        >
                          E-
                        </Box>
                        Shop
                      </Typography>
                    </Box>
                  </Link>
                  <IconButton color="danger" onClick={() => setdrawer(false)}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
                <hr />
                <Box
                  component={"ul"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: "auto",
                    alignItems: "flex-start",
                    p: 0,
                  }}
                  className={"nav"}
                >
                  <Box component={"li"} className={"nav-item"}>
                    <Button variant="text" color="secondary" sx={{ pl: 2 }}>
                      <NavLink
                        to={"/"}
                        className={`${({ isActive }) =>
                          isActive ? "active" : null} nav-link`}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <HomeOutlinedIcon />
                        <span>Home</span>
                      </NavLink>
                    </Button>
                  </Box>
                  <li>
                    <Box component={"ul"} sx={{ listStyle: "none", pl: 0 }}>
                      <CollapseItem
                        name={"Products"}
                        items={allCategories}
                        link={true}
                        linkRoute="/Products"
                      />
                    </Box>
                  </li>
                  <li>
                    <NavItemSm
                      title={"Discounts"}
                      route="/Products/category/Discounts"
                      icon={<PercentOutlinedIcon />}
                      activeClass={true}
                      className="navbar-item-secondary"
                    />
                  </li>
                  <li>
                    <NavItemSm
                      title={"Games"}
                      route="/Products/category/forGamer"
                      icon={<SportsEsportsOutlinedIcon />}
                      activeClass={true}
                      className="navbar-item-secondary"
                    />
                  </li>
                  <li>
                    <Button variant="text" color="secondary" sx={{ pl: 2 }}>
                      <Link
                        to="/"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InfoOutlinedIcon />
                        <span>About us</span>
                      </Link>
                    </Button>
                  </li>
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
        <NavItems></NavItems>
      </AppBar>
    </>
  );
};

export default AppHeader;
