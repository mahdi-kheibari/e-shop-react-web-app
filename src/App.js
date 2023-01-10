import React from 'react'
import theme from './theme'
import { ThemeProvider } from "@mui/material";
import AppLayout from './layouts/AppLayout';
import Context from './store/Context'
import './App.scss'

const App = () => {
    return (
        <Context>
            <ThemeProvider theme={theme}>
                <AppLayout></AppLayout>
            </ThemeProvider>
        </Context>
    );
}

export default App;