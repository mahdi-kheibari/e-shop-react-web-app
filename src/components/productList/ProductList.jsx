import { Box } from "@mui/material";
import React from "react";
import ProductItem from "./productItem/ProductItem";
import "./productList.scss";

const ProductList = ({ items, subItemPath }) => {
  return (
    <Box className="products-list" sx={{ bgcolor: "white.main", mb: 3 }}>
      {Array.isArray(items) === false ? (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              m: 0,
              mt: { md: 1 },
              listStyle: "none",
              pl: 0,
            }}
          >
            {Object.keys(items).map((key) => {
                return items[key].map((i) => (
                  <Box
                    key={i.name}
                    component={"li"}
                    className="products-list_item"
                  >
                    <ProductItem item={i} keyName={key} />
                  </Box>
                ))
            })}
          </Box>
        </Box>
      ) : (
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "space-between",
            listStyle: "none",
            m: 0,
            pl: 0,
          }}
        >
          {items.map((i) => (
            <Box key={i.name} component={"li"} className={"products-list_item"}>
              <ProductItem item={i} subItemPath={subItemPath} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
