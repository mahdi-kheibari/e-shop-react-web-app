import React from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './layouts/AppLayout';
import Context from './store/Context'

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