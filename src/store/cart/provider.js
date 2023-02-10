import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
const CartProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default CartProvider;