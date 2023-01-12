import { createTheme } from '@mui/material/styles';

const allTypographyVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']
const typographyVariants = {
    fontFamily: "'Vazir','Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 300,
}
allTypographyVariants.map((item) => { typographyVariants[item] = { fontFamily: "'Vazir','Roboto', 'Helvetica', 'Arial', sans-serif" } })

const theme = createTheme({
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
        keys:['xs','sm','md','lg','xl','xxl'],
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl:1400
        },
    },
    typography: { ...typographyVariants },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthSm: {
                    '&.MuiContainer-maxWidthSm': {
                        maxWidth: '540px',
                    },
                },
                maxWidthMd: {
                    '&.MuiContainer-maxWidthMd': {
                        maxWidth: '720px',
                    },
                },
                maxWidthLg: {
                    '&.MuiContainer-maxWidthLg': {
                        maxWidth: '960px',
                    },
                },
                maxWidthXl: {
                    '&.MuiContainer-maxWidthXl': {
                        maxWidth: '1140px',
                    },
                },
                maxWidthXxl: {
                    '&.MuiContainer-maxWidthXxl': {
                        maxWidth: '1320px',
                    },
                },
            }
        },
    },
});
export default theme;