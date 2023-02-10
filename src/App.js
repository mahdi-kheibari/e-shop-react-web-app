import React from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './layouts/AppLayout';
import Context from './store/Context'
import CartProvider from './store/cart/provider';

const App = () => {
    return (
        <CartProvider>
            <Context>
                <ThemeProvider theme={theme}>
                    <AppLayout></AppLayout>
                </ThemeProvider>
            </Context>
        </CartProvider>
    );
}

export default App;