import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Link from "../../../utils/Link";
import { NavLink } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { store } from "../../../../store/Context";
import "./navItems.scss";

const NavItem = ({ item, setShowMenu, lastItem }) => {
  return (
    <Box>
      <Link to={item.route} sx={{ position: "relative", px: 1 }}>
        <Button
          variant="text"
          color="gray"
          onMouseOver={item.name === "Categories" ? () => setShowMenu() : null}
          sx={{
            bgcolor: "white",
            ml: 2,
            px: 3,
            pr: 4,
            textTransform: "capitalize",
          }}
        >
          {item.icon}
          <Typography
            component={"span"}
            color="secondary.main"
            sx={{ fontSize: "14.5px !important" }}
          >
            {item.name}
          </Typography>
        </Button>
      </Link>
      {!lastItem ? (
        <Box component={"span"} sx={{ color: "gray.main", px: 1, pb: 1 }}>
          |
        </Box>
      ) : null}
    </Box>
  );
};
const NavItems = () => {
  const { allCategories } = useContext(store);
  const [showMenu, setShowMenu] = useState(false);
  const itemNames = [
    {
      name: "Categories",
      route: "/Products",
      icon: <MenuOutlinedIcon fontSize="small" color="secondary"></MenuOutlinedIcon>,
    },
    {
      name: "Discounts",
      route: "/Products/category/Discount",
      icon: <PercentOutlinedIcon fontSize="small"></PercentOutlinedIcon>,
    },
    {
      name: "Games",
      route: "/Products/category/forGamer",
      icon: (
        <SportsEsportsOutlinedIcon fontSize="small"></SportsEsportsOutlinedIcon>
      ),
    },
    {
      name: "About Us",
      route: "/",
      icon: <InfoOutlinedIcon fontSize="small"></InfoOutlinedIcon>,
    },
  ];

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "white.main",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component={"nav"}
          sx={{ width: "100%", py: 0, pt: 1, px: 1, display: "flex" }}
          className="second-navbar"
        >
          {itemNames.map((item) =>
            item.name === "Categories" ? (
              <Box
                key={item.name}
                className="navbar-item-all"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <NavItem
                  item={item}
                  setShowMenu={() => setShowMenu(true)}
                  lastItem={false}
                ></NavItem>
                <Box
                  className="all-categories"
                  sx={{
                    position: "absolute",
                    p: 0,
                    display: showMenu ? "block" : "none",
                  }}
                >
                  <Box
                    sx={{ position: "relative", width: "100%", height: "100%" }}
                  >
                    <Box
                      sx={{ position: "absolute" }}
                      className="all-categories_backdrop"
                      onMouseEnter={() => setShowMenu(false)}
                    ></Box>
                    <Box
                      className="all-categories_background rounded-bottom"
                      sx={{ bgcolor: "white.main", position: "absolute", ml: 2 }}
                      onMouseLeave={() => setShowMenu(false)}
                    >
                      <Box
                        component={"ul"}
                        className="btn-toggle-nav"
                        sx={{ listStyle: "none", display: "flex",p:0 }}
                      >
                        {Object.keys(allCategories).map((key) => (
                          <Box component={"li"} key={key} sx={{ mx: 2, mt: 1,"& a:hover span":{color:"primary.main"} }}>
                            <NavLink
                              to={allCategories[key].route}
                              className={({ isActive }) =>{
                                return isActive ? "active-category" : undefined}}
                            >
                              {({ isActive }) => (
                                <Typography
                                  component={"span"}
                                  color={isActive ? "primary.main" : "initial"}
                                  sx={{ px: 1 }}
                                  className="font-14"
                                >
                                  {key}
                                </Typography>
                              )}
                            </NavLink>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box key={item.name}>
                <NavItem
                  item={item}
                  lastItem={
                    itemNames[itemNames.length - 1] === item ? true : false
                  }
                ></NavItem>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavItems;
