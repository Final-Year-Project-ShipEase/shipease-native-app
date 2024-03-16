
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#00668C',
        },
        secondary: {
            main: '#71C4EF',
            hover: '#629DBC',
        },
    },
});
responsiveFontSizes(theme);

export default theme;
