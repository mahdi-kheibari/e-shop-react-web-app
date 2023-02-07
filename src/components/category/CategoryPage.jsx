import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import CategoryList from "./CategoryList";
import CategoryListSm from "./CategoryListSm";

function CategoryPage({productsCategory,subRoute,productsCategory2,subRoute2}) {
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
    </div>
  );
}

export default CategoryPage;
