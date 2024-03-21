import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01668c',
    },
    secondary: {
      main: '#71C4EF',
      hover: '#629DBC',
    },
    button: {
      backgroundColor: '#00000026',
      textColor: '#000000',
    },
    alreadyAccount: {
      textColor: '#FFFFFF',
    },
    card: {
      backgroundColor:
        'linear-gradient(219.14deg, rgba(0,102,140,1) 5.5%, rgba(0,102,140,1) 47.24%, rgba(43,143,180,1) 68.5%, rgba(88,184,221,1) 94.11%)',
      titleColor: '#FFFFFF',
      textColor: 'rgba(255, 255, 255, 0.8)',
      buttonColor: 'rgba(113, 196, 239, 1)',
    },
    registration: {
      title: '#00668C',
      content: '#292B2D',
      backgroundColorRegistration: '#00668C',
      textColorRegistration: '#FFFFFF',
      backgroundColorLogin: '#00000026',
      textColorLogin: '#00668C',
    },
    login: {
      backgroundColorLogin: '#00668C',
      textColorLogin: '#FCFCFC',
      backgroundColorRegistration: '#2C14DD',
      textColorRegistration: '#00668C',
    },

    otpVerification: {
      outerRoundView: '#abcdd9',
      innerRoundView: '#00668c',
      titleContentColor: '#00668C',
      bodyContentColor: '#75787E',
      otpCode: '#00668c',
      buttonText: '#00668C',
    },

    verificationSuccessfulModal: {
      backgroundColor: '#01668c',
      checkDone: '#0f6f93',
      outerViewColor: '#267d9d',
      innerViewColor: '#ffffff',
      modalBodyText: '#E6E6E6',
      modalTitleText: '#E6E6E6',
      buttonColor: '#FFFFFF',
      buttonTextColor: '#000000',
    },
  },
});
responsiveFontSizes(theme);

export default theme;
