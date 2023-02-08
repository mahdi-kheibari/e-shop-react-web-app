import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
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
import VideoAudioProduct from "./pages/product/videoAudio/Id";
import CleaningProduct from "./pages/product/cleaning/Id";
import FemaleProduct from "./pages/product/female/Id";
import MaleProduct from "./pages/product/male/Id";
import LaptopProduct from "./pages/product/laptop/Id";
import MobileProduct from "./pages/product/mobile/Id";
import HealthProduct from "./pages/product/health/Id";
import MakeupProduct from "./pages/product/makeup/Id";
import Discounts from "./pages/products/category/childs/Discounts/Index";
import Electronic from "./pages/products/category/childs/Electronic/Index";
import ForGamer from "./pages/products/category/childs/ForGamer/Index";
import Error from './layouts/Error';

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
                <Route
                    path="forGamer"
                    element={<ForGamer></ForGamer>}
                ></Route>
                <Route
                    path="Discounts"
                    element={<Discounts></Discounts>}
                ></Route>
                <Route
                    path="Electronic"
                    element={<Electronic></Electronic>}
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
            <Route path='/Product'>
                <Route path='mobile'>
                    <Route path=':id' element={<MobileProduct></MobileProduct>}></Route>
                </Route>
                <Route path='laptop'>
                    <Route path=':id' element={<LaptopProduct></LaptopProduct>}></Route>
                </Route>
                <Route path='male'>
                    <Route path=':id' element={<MaleProduct></MaleProduct>}></Route>
                </Route>
                <Route path='female'>
                    <Route path=':id' element={<FemaleProduct></FemaleProduct>}></Route>
                </Route>
                <Route path='health'>
                    <Route path=':id' element={<HealthProduct></HealthProduct>}></Route>
                </Route>
                <Route path='makeup'>
                    <Route path=':id' element={<MakeupProduct></MakeupProduct>}></Route>
                </Route>
                <Route path='video-audio'>
                    <Route path=':id' element={<VideoAudioProduct></VideoAudioProduct>}></Route>
                </Route>
                <Route path='cleaning'>
                    <Route path=':id' element={<CleaningProduct></CleaningProduct>}></Route>
                </Route>
            </Route>
            <Route path="/404" element={<Error/>} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default Router;
