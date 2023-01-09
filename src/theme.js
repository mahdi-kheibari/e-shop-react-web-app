import { createTheme } from "@mui/material";

const allTypographyVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']
const typographyVariants = {
    fontFamily: "'Vazir','Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 300,
}
allTypographyVariants.map((item) => { typographyVariants[item] = { fontFamily: "'Vazir','Roboto', 'Helvetica', 'Arial', sans-serif" } })

let theme = createTheme({});
theme = createTheme(theme, {
    palette: {
        primary: { main: '#61DAFB' },
        primary_light: { main: '#88ECFC' },
        secondary: { main: '#222' },
        success: { main: '#8DDB20' },
        info: { main: '#4F95FF' },
        warning: { main: '#FCDE00' },
        danger: { main: '#FF7449' },
        gray: { main: '#ccc' },
        light: { main: '#edf2f7' },
        dark: { main: '#2c3e50' },
        white: { main: '#fff' }
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    typography: { ...typographyVariants },
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
export default theme;