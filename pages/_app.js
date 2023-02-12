import AppLayout from '@/components/layouts/AppLayout'
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import '@/styles/sass/globals.scss'

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <ThemeProvider theme={theme}>
            <AppLayout>
                {getLayout(<Component {...pageProps} />)}
            </AppLayout>
        </ThemeProvider>
    )
}
