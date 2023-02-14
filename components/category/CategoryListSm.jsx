import { Box } from "@mui/material";
import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import NavLink from "../utils/NavLink";
import Link from "../utils/Link";
import Icon from "../utils/Icon";
function CategoryListSm({ products, products2, subRoute, subRoute2 }) {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      {windowWidth < 768 ? (
        <Box
          className="category-sm"
          sx={{
            position: "fixed",
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            bgcolor: "white.main",
            py: { xs: 2, sm: 0 },
          }}
        >
          {Object.keys(products).map((key) => (
            <Box
              key={key}
              sx={{
                "& .category-sm-item": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  p: { sm: 3 },
                },
              }}
            >
              <NavLink
                href={subRoute ? subRoute + key : products[key].route}
                activeClassName="active"
                className={`font-16 font-sm-18`}
              >
                <Box className={"category-sm-item"}>
                  <Box className="category-sm-item_cover">
                    {products[key].icon ? (
                      <Icon iconName={products[key].icon} />
                    ) : (
                      <span
                        className={`'icon' ${products[key].iconClass}`}
                      ></span>
                    )}
                  </Box>
                  <Box sx={{ fontWeight: "bold" }}>{key}</Box>
                </Box>
              </NavLink>
            </Box>
          ))}
          {products2 ? (
            <>
              {Object.keys(products2).map((key) => (
                <Link
                  key={key}
                  href={`${subRoute2 + key}`}
                  className={"category-sm-item font-16 font-sm-18"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1,
                    p: { sm: 3 },
                  }}
                >
                  <Box
                    className="category-sm-item_cover font-16 font-sm-18"
                    sx={{ px: 1, fontWeight: "bold" }}
                  >
                    {products2[key].icon ? (
                      <Icon iconName={products2[key].icon} />
                    ) : (
                      <span
                        className={`'icon' ${products2[key].iconClass}`}
                      ></span>
                    )}
                  </Box>
                  <Box sx={{ fontWeight: "bold" }}>{key}</Box>
                </Link>
              ))}
            </>
          ) : null}
        </Box>
      ) : null}
    </>
  );
}

export default CategoryListSm;
