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
import ForgetPassword from './src/User/loginScreen/forgetPassword';
import SignUpScreen from './src/User/signUpScreen/signUpScreen';
import OPTVerification from './src/User/component/OtpScreen/otpVerification';
import VerificationSuccessfulModal from './src/User/modal/verificationSuccessfulModal';
import ChangePasswordModal from './src/User/modal/changePasswordModal';
import PrivacyAndPolicy from './src/User/homePage/privacyAndPolicy';
import TermsAndConditions from './src/User/homePage/termsAndConditions';
import EditProfile from './src/User/homePage/editProfile';
import ChangePassword from './src/User/homePage/changePassword';
import Settings from './src/User/homePage/settings';
import BottomNavigationBar from './src/User/component/bottomNavigation/bottomNavigation';
import PickUpConfirmation from './src/User/confirmation/pickUp';
import BasedOnVehiclesSelection from './src/User/BasedOnVehiclesSelection/basedOnVehiclesSelection'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {/*   <Stack.Group screenOptions={{ headerShown: false }}>
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

            <Stack.Screen
              name= 'TermsAndConditions'
              component={TermsAndConditions}
              >

              </Stack.Screen>
  </Stack.Group>

          <Stack.Group
            screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="OTPVerification" component={OPTVerification} />
          </Stack.Group>

          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
            ></Stack.Screen>

            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
            ></Stack.Screen>
            <Stack.Screen
              name="PrivacyAndPolicy"
              component={PrivacyAndPolicy}
            ></Stack.Screen>
          </Stack.Group>
          */}
          <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen name="BasedOnVehiclesSelection" component={BasedOnVehiclesSelection} />
            </Stack.Group>

          {/*  <Stack.Screen options={{headerShown:false}} name="BottomNavigationBar" component={BottomNavigationBar} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
