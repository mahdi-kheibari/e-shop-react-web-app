import React from 'react'
import theme from './theme'
import { ThemeProvider } from "@mui/material";
import AppLayout from './layouts/AppLayout';
import './App.scss'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppLayout></AppLayout>
        </ThemeProvider>
    );
}

export default App;