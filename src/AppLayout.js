import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import React from 'react'
import './App.scss'

let theme = createTheme({});
theme = createTheme(theme, {
    palette: {
        primary: { main: '#00C58E' },
        primary_light: { main: '#00e0a1' },
        secondary: { main: '#2f495e' },
        success: { main: '#22C157' },
        info: { main: '#176AEF' },
        warning: { main: '#E8D912' },
        danger: { main: '#f0403a' },
        gray: { main: '#ccc' },
        light: { main: '#edf2f7' },
        dark: { main: '#2c3e50' }
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    breakpoints: {
        values: {
            xs: 360,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    [theme.breakpoints.up('sm')]: {
                        maxWidth: '540px',
                    },
                    [theme.breakpoints.up('md')]: {
                        maxWidth: '720px',
                    },
                    [theme.breakpoints.up('lg')]: {
                        maxWidth: '960px',
                    },
                    [theme.breakpoints.up('xl')]: {
                        maxWidth: '1140px',
                    },
                },
            }
        },
    },
})
const App = () => {
    return (
        <ThemeProvider theme={theme}>

        </ThemeProvider>
    );
}

export default App;