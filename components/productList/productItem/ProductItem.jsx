import { Box } from "@mui/material";
import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Link from "../../utils/Link";

const ProductItem = ({ item, keyName, subItemPath }) => {
  const { windowWidth } = useWindowWidth();
  function subPath() {
    if (keyName !== undefined) {
      return keyName;
    } else {
      return subItemPath;
    }
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {item.special ? (
        <Box
          className="products-list_item_special"
          sx={{
            color: "danger.main",
            textAlign: { xs: "left", md: "center" },
            px: { xs: 2, md: 0 },
            mx: { md: 2 },
          }}
        >
          special sale
        </Box>
      ) : (
        <Box className="no-special"></Box>
      )}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: { md: "column" },
          justifyContent: { md: "space-between" },
          alignItems: { xs: "space-between", md: "flex-start" },
        }}
      >
        <Link
          to={`/Product/${subPath()}/${item.id}`}
          className={"products-list_item_img"}
          sx={{ my: "auto", mx: { md: "auto" } }}
        >
          <img src={item.images[0].address} alt={item.name} />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: { xs: 3, md: 0 },
            width: "100%",
          }}
        >
          <Box
            className="products-list_item_caption"
            sx={{
              my: { xs: !item.special ? 3 : 0, md: 3 },
              mx: { xs: 2, md: 0 },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "center" },
              justifyContent: { xs: "space-around", md: "space-between" },
            }}
          >
            <Link
              to={`/Product/${subPath()}/${item.id}`}
              className={`${
                !item.special || windowWidth < 768 ? "caption_nameTwoLine" : ""
              } ${
                item.special && windowWidth >= 768 ? "caption_nameOneLine" : ""
              } font-md-16 font-14`}
              sx={{ textAlign: "left", px: { md: 2 }, width: "100%", mb: 0 }}
            >
              {item.name}
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bold",
                textAlign: { xs: "left", md: "center" },
                justifyContent:
                  !item.special && windowWidth > 768 ? "flex-end" : "initial",
              }}
            >
              {item.special ? (
                <Box sx={{ display: "flex" }}>
                  <Box
                    component={"span"}
                    className="font-14 font-md-16 rounded-pill"
                    sx={{
                      color: "white.main",
                      bgcolor: "danger.main",
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    {item.discount}
                  </Box>
                  <Box
                    component={"span"}
                    className="font-12 font-md-14"
                    sx={{
                      color: "secondary.main",
                      textDecoration: "line-through",
                    }}
                  >
                    {item.realPrice}
                  </Box>
                </Box>
              ) : null}
              <Box className="font-16 font-md-18" sx={{ fontWeight: "bold" }}>
                {item.price}
                <Box
                  component={"span"}
                  className="font-12 font-md-14"
                  sx={{ fontWeight: "normal" }}
                >
                  toman
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
