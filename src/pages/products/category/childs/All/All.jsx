import { Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../../../../../components/productList/ProductList";
import { changeSearchValue } from "../../../../../store/redux/search/searchSlice";
import { store } from "../../../../../store/Context";
import { useSearchParams } from "react-router-dom";

const All = () => {
  const [Products, setProducts] = useState({});
  const [FilteredBySearch, setFilteredBySearch] = useState({});
  const [Searched, setSearched] = useState(false);
  const [query, setQuery] = useState(false);
  const context = useContext(store);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let searchVal = window.location.search.substring(1).split("=")[1];
    if (searchVal) {
      setQuery(window.location.search.substring(1).split("=")[1]);
    }
  }, [searchParams]);
  useEffect(() => {
    if (query) {
      dispatch(changeSearchValue({ info: query }));
    }
  }, [query]);
  useEffect(() => {
    const products = {};
    const allCategories = {
      Digital: context.Digital.Products,
      Fashion: context.Fashion.Products,
      Beauty: context.Beauty.Products,
      House: context.House.Products,
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
  }, [searchParams,query]);
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
