import { createContext } from "react";
import state from './index'
import categories from './categories'
import React from 'react';

export const store = createContext({ mainSliderImg: [], discountSliderImg: [], bestsellersSlider: [], SpecialBrandsSlider: [],allCategories:{} })

const Context = ({ children }) => {
    return (
        <store.Provider value={{...state,...categories}}>
            {children}
        </store.Provider>
    );
}

export default Context;