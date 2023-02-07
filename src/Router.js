import React from 'react';
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/index";
import Categories from "./pages/products/index/index";
import Category from "./pages/products/category/Index";
import Beauty from "./pages/products/category/childs/Beauty/Index";
import Digital from "./pages/products/category/childs/Digital/Index";
import Fashion from "./pages/products/category/childs/Fashion/Index";
import House from "./pages/products/category/childs/House/Index";
import DigitalPage from "./pages/products/Digital/Index";
import Laptop from "./pages/products/Digital/childs/Laptop";
import Mobile from "./pages/products/Digital/childs/Mobile";
import BeautyPage from "./pages/products/Beauty/Index";
import Health from "./pages/products/Beauty/childs/Health";
import Makeup from "./pages/products/Beauty/childs/Makeup";
import FashionPage from "./pages/products/Fashion/Index";
import Female from "./pages/products/Fashion/childs/Female";
import Male from "./pages/products/Fashion/childs/Male";
import HousePage from "./pages/products/House/Index";
import Cleaning from "./pages/products/House/childs/Cleaning";
import VideoAudio from "./pages/products/House/childs/VideoAudio";

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
            <Route path='/Products/Digital' element={<DigitalPage></DigitalPage>}>
                <Route path='laptop' element={<Laptop></Laptop>}></Route>
                <Route path='mobile' element={<Mobile></Mobile>}></Route>
            </Route>
            <Route path='/Products/Beauty' element={<BeautyPage></BeautyPage>}>
                <Route path='health' element={<Health></Health>}></Route>
                <Route path='makeup' element={<Makeup></Makeup>}></Route>
            </Route>
            <Route path='/Products/Fashion' element={<FashionPage></FashionPage>}>
                <Route path='male' element={<Male></Male>}></Route>
                <Route path='female' element={<Female></Female>}></Route>
            </Route>
            <Route path='/Products/House' element={<HousePage></HousePage>}>
                <Route path='cleaning' element={<Cleaning></Cleaning>}></Route>
                <Route path='video-audio' element={<VideoAudio></VideoAudio>}></Route>
            </Route>
        </Routes>
    );
}

export default Router;
