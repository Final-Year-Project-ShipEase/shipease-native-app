import React from 'react';
import SplashScreen from './src/User/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import OnBoardingScreenOne from './src/User/onBoardingScreen/onBoardingScreenOne';
import OnBoardingScreenTwo from './src/User/onBoardingScreen/onBoardingScreenTwo';
import OnBoardingScreenThree from './src/User/onBoardingScreen/onBoardingScreenThree';
import LoginScreen from './src/User/loginScreen/loginScreen';
import SignUpScreen from './src/User/signUpScreen/signUpScreen';
import OPTVerification from './src/User/component/OtpScreen/otpVerification';
import VerificationSuccessfulModal from './src/User/modal/verificationSuccessfulModal';
import ChangePasswordModal from './src/User/modal/changePasswordModal';
import PrivaryAndPolicy from './src/User/homePage/privacyAndPolicy';
import TermsAndConditions from './src/User/homePage/termsAndConditions'; 
import EditProfile from './src/User/homePage/editProfile';
import ChangePassword from './src/User/homePage/changePassword';
import  Settings  from './src/User/homePage/settings';
import BottomNavigationBar from './src/User/component/bottomNavigation/bottomNavigation';
import Dashboard from './src/User/dashboard/dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
         {/*  <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen
              name="OnBoardingScreenOne"
              component={OnBoardingScreenOne}
            />
            <Stack.Screen
              name="OnBoardingScreenTwo"
              component={OnBoardingScreenTwo}
            />
            <Stack.Screen
              name="OnBoardingScreenThree"
              component={OnBoardingScreenThree}
            />
          </Stack.Group>

          <Stack.Group
            screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}
          >
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="OTPVerification" component={OPTVerification} />

            <Stack.Screen
              name="VerificationSuccessfulModal"
              component={VerificationSuccessfulModal}
            />
          </Stack.Group> 

          <Stack.Group   screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}> 
          <Stack.Screen name="LoginScreen" component={LoginScreen} />         
          
          <Stack.Screen name="ChangePasswordModal" component={ChangePasswordModal} />
  
  </Stack.Group>  

        {/*  <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
            ></Stack.Screen>
      </Stack.Group>   */}

      <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />

            </Stack.Group>


{/*  <Stack.Screen options={{headerShown:false}} name="BottomNavigationBar" component={BottomNavigationBar} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
