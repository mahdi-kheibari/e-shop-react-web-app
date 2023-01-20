import React from 'react';
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/index";
import Categories from "./pages/products/index/index";
import Category from "./pages/products/category/Index";
import Beauty from "./pages/products/category/childs/Beauty/Index";
import Digital from "./pages/products/category/childs/Digital/Index";
import Fashion from "./pages/products/category/childs/Fashion/Index";
import House from "./pages/products/category/childs/House/Index";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index></Index>} exact></Route>
            <Route
                path="/Products"
                element={<Categories></Categories>}
                exact
            ></Route>
            <Route path="/Products/category" element={<Category></Category>}>
                <Route
                    path="Beauty"
                    element={<Beauty></Beauty>}
                ></Route>
                <Route
                    path="Fashion"
                    element={<Fashion></Fashion>}
                ></Route>
                <Route
                    path="House"
                    element={<House></House>}
                ></Route>
                <Route
                    path="Digital"
                    element={<Digital></Digital>}
                ></Route>
            </Route>
        </Routes>
    );
}

export default Router;
