import React from 'react';
import { createContext } from "react";
import state from './index'
import categories from './categories'
import Digital from './Digital'
import Fashion from './Fashion'
import Beauty from './Beauty'
import House from './House'

export const store = createContext({ categories:[],mainSliderImg: [], discountSliderImg: [], bestsellersSlider: [], SpecialBrandsSlider: [],allCategories:{},Digital:{},Fashion:{},Beauty:{},House:{},brands:[] })

const Context = ({ children }) => {
    return (
        <store.Provider value={{...state,...categories,Digital,Beauty,Fashion,House}}>
            {children}
        </store.Provider>
    );
}

export default Context;