import React from 'react';
import { createContext, useReducer } from "react";
import index from './index'
import categories from './categories'
import Digital from './Digital'
import Fashion from './Fashion'
import Beauty from './Beauty'
import House from './House'
import cart from './cart'
import cartReducer from './cartReducer';


export const store = createContext({ cartStateProvider: {}, categories: [], mainSliderImg: [], discountSliderImg: [], bestsellersSlider: [], SpecialBrandsSlider: [], allCategories: {}, Digital: {}, Fashion: {}, Beauty: {}, House: {}, brands: [] })

const Context = ({ children }) => {
    // reducer for shopping cart actions
    const initialCartState = { ...cart };
    const [state, dispatch] = useReducer(cartReducer, initialCartState)

    const actions = {
        addItem(info) {
            if (state.cartItems.some(i => i.id === info.product.id) === false || state.cartItems.length <= 0) {
                const priceArr = info.product.price.split(",");
                let newPrice = "";
                for (let i in priceArr) {
                    newPrice += priceArr[i];
                }
                newPrice = parseInt(newPrice);
                const total = newPrice * parseInt(info.count);
                info.product["priceNumber"] = newPrice
                info.product["count"] = info.count
                info.product["total"] = total
                dispatch({ type: 'setItem', info: info.product });
                return true;
            } else {
                return false;
            };
        },
        deleteItem(info) {
            dispatch({ type: 'deleteItem', info: info.productId });
        },
        deleteAll() {
            dispatch({ type: 'deleteAll' });
        },
        saveCart() {
            localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
        }
    }

    const cartStateProvider = { state, dispatch, actions }
    return (
        <store.Provider value={{ cartStateProvider, ...index, ...categories, Digital, Beauty, Fashion, House }}>
            {children}
        </store.Provider>
    );
}

export default Context;