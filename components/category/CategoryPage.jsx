import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import CategoryList from "./CategoryList";
import CategoryListSm from "./CategoryListSm";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ProductList from "../productList/ProductList";
import { Box } from "@mui/system";

function CategoryPage({
  productsCategory,
  subRoute,
  productsCategory2,
  subRoute2,
  activeText,
  productsItems,
}) {
  const { windowWidth } = useWindowWidth();
  return (
    <div>
      <section>
        {windowWidth >= 768 ? (
          <CategoryList
            products={productsCategory}
            products2={productsCategory2 ? productsCategory2 : undefined}
            subRoute={subRoute}
            subRoute2={subRoute2 ? subRoute2 : undefined}
          />
        ) : (
          <CategoryListSm
            products={productsCategory}
            products2={productsCategory2 ? productsCategory2 : undefined}
            subRoute={subRoute}
            subRoute2={subRoute2 ? subRoute2 : undefined}
          />
        )}
      </section>
      <section>
        <Box sx={{ pt: { xs: 0, md: "initial" } }}>
          <Breadcrumb activeText={activeText} />
        </Box>
        <ProductList items={productsItems} />
      </section>
    </div>
  );
}

export default CategoryPage;
