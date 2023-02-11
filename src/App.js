import React from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './layouts/AppLayout';
import Context from './store/Context'
import CartProvider from './store/redux/provider';
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
    return (
        <Auth0Provider
            domain="dev-9vtpsxjd.us.auth0.com"
            clientId="vl1roPvPfYXRRAROzisqNJVDpCwXXPLr"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <CartProvider>
                <Context>
                    <ThemeProvider theme={theme}>
                        <AppLayout></AppLayout>
                    </ThemeProvider>
                </Context>
            </CartProvider>
        </Auth0Provider>
    );
}

export default App;