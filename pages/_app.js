import AppLayout from '@/components/layouts/AppLayout'
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import '@/styles/sass/globals.scss'
import Context from '@/store/Context'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ReduxProvider from '@/store/redux/provider'

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <UserProvider>
            <ReduxProvider>
                <Context>
                    <ThemeProvider theme={theme}>
                        <AppLayout>
                            {getLayout(<Component {...pageProps} />)}
                        </AppLayout>
                    </ThemeProvider>
                </Context>
            </ReduxProvider>
        </UserProvider>
    )
}
