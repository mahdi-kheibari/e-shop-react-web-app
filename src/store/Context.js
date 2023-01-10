import { createContext } from "react";
import state from './index'
import React from 'react';

export const store = createContext({ mainSliderImg: [], discountSliderImg: [], bestsellersSlider: [], SpecialBrandsSlider: [] })

const Context = ({ children }) => {
    return (
        <store.Provider value={{...state}}>
            {children}
        </store.Provider>
    );
}

export default Context;