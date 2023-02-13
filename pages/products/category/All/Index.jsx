import { Alert, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "@/components/productList/ProductList";
import { changeSearchValue } from "@/store/redux/search/searchSlice";
import { useRouter } from "next/router";

const All = ({ Digital, Fashion, Beauty, House }) => {
  const [Products, setProducts] = useState({});
  const [FilteredBySearch, setFilteredBySearch] = useState({});
  const [Searched, setSearched] = useState(false);
  const [query, setQuery] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { search } = router.query;
  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);
  useEffect(() => {
    if (query) {
      dispatch(changeSearchValue({ info: query }));
    }
  }, [query]);
  useEffect(() => {
    const products = {};
    const allCategories = {
      Digital: Digital.Products,
      Fashion: Fashion.Products,
      Beauty: Beauty.Products,
      House: House.Products,
    };
    function pushToProducts(Product) {
      for (let key in Product) {
        products[key] = Product[key];
      }
    }
    for (let key in allCategories) {
      pushToProducts(allCategories[key]);
    }

    const filteredBySearch = {};
    let searched = false;
    if (query) {
      searched = true;
      for (let key in products) {
        const filtered = products[key].filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        const filteredFa = products[key].filter((item) =>
          item.nameFa.toLowerCase().includes(query.toLowerCase())
        );
        if (filtered.length > 0) {
          filteredBySearch[key] = filtered;
        } else if (filteredFa.length > 0) {
          filteredBySearch[key] = filteredFa;
        }
      }
      dispatch(changeSearchValue({ info: query }));
    }
    setProducts(products);
    setFilteredBySearch(filteredBySearch);
    setSearched(searched);
  }, [search, query]);
  return (
    <div>
      <ProductList items={Searched ? FilteredBySearch : Products} />
      {Searched && Object.keys(FilteredBySearch).length === 0 ? (
        <Alert severity="warning">Nothing found!</Alert>
      ) : null}
    </div>
  );
};

export default All;

import Digital from "@/store/Digital";
import Fashion from "@/store/Fashion";
import Beauty from "@/store/Beauty";
import House from "@/store/House";
export const getStaticProps = async (ctx) => {
  return {
    props: {
      Digital,
      Fashion,
      Beauty,
      House,
    },
  };
};

import categories from "@/store/categories";
import AsideLayout from "@/components/layouts/asideLayout/AsideLayout";
import Item from "@/components/aside/Item";
import CollapseItem from "@/components/aside/CollapseItem";
All.getLayout = function getLayout(page) {
  return (
    <Box className="container-fluid">
      <Grid container spacing={4}>
        <Grid item lg={3} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ height: "100%", display: "block" }}>
            <AsideLayout>
              <Box key={"before"}>
                <Item name={"All products"} route="/Products/category/All" />
                <CollapseItem
                  name="Products"
                  items={categories.allCategories}
                />
              </Box>
              <Box key={"after"}>
                <Item
                  name={"Special discounts"}
                  route="/Products/category/Discounts"
                />
                <Item
                  name={"Electronic needs"}
                  route="/Products/category/Electronic"
                />
                <Item name={"For gamers"} route="/Products/category/forGamer" />
                <Item
                  name={"Special brands"}
                  route="/Products/category/Brands"
                />
              </Box>
            </AsideLayout>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          {page}
        </Grid>
      </Grid>
    </Box>
  );
};
