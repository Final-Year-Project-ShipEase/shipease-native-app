import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01668c',
    },

    FontFamily: {
      regular: 'Arial',
      outfit: 'outfit'
    },

    dashboard: {
      transparent: 'rgba(0, 0, 0, 0.5)',
      black: '#000000',
      mainblue: '#00668C',
      imagecolor: '#94BFCF',
      shadowColor1: "rgba(0, 0, 0, 0.25)",
      searchbarcolor: "#cacaca",
      searchbartextcolor: "#686565",
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
      backgroundColorRegistration: '#00000026',
      textColorRegistration: '#00668C',
      forgetPasswordTextColor: '#00668C',
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

    changePasswordModal: {
      outerViewColor: '#277d9d',
      innerViewColor: '#ffffff',
      modalViewColor: '#01678d',
      backgroundColor: '#00668c',
      inputColor: '#ffffff',
      textColor: '#ffffff',
      buttonBackgroundColor: '#ffffff',
      buttonTextColor: '#2d2d2d',
      iconColor: '#ffffff',
    },
    editProfile: {
      labelColor: '#00668c',
      inputColor: '#00668c',
      outlineColor: 'transparent',
      textColor: '#00668c',
      buttonColor: '#ffffff',
      buttonBackgroundColor: '#00668c',
    },
    settings: {
      backgroundColor: '#00668c',
      titleColor: '#ffffff',
      contentContainerColor: '#ffffff',
      switchColor: '#00668c',
    },

    homePage: {
      emailBackgroundColor: '#00668c',
      searchIconColor: '#00668c',
      notificationIconColor: '#00668c',
      settingIconColor: '#00668c',
    },
    confirmation: {
      titleColor: '#00668c',
      informationBackgroundColor: '#cccbcb',
      buttonColor: '#cee0e7',
      buttonBackgroundColor: '#00668c'
    },
  },
});
responsiveFontSizes(theme);

export default theme;
