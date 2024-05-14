import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

import SplashScreen from './src/User/splashScreen';
import OnBoardingScreenOne from './src/User/onBoardingScreen/onBoardingScreenOne';
import OnBoardingScreenTwo from './src/User/onBoardingScreen/onBoardingScreenTwo';
import OnBoardingScreenThree from './src/User/onBoardingScreen/onBoardingScreenThree';
import LoginScreen from './src/User/loginScreen/loginScreen';
import ForgetPassword from './src/User/loginScreen/forgetPassword';
import SignUpScreen from './src/User/signUpScreen/signUpScreen';
import OPTVerification from './src/User/component/OtpScreen/otpVerification';
import VerificationSuccessfulModal from './src/User/modal/verificationSuccessfulModal';
import ChangePasswordModal from './src/User/modal/changePasswordModal';
import EditProfile from './src/User/homePage/editProfile';
import Settings from './src/User/homePage/settings';
import ChangePassword from './src/User/homePage/changePassword';
import TermsAndConditions from './src/User/homePage/termsAndConditions';
import PrivacyAndPolicy from './src/User/homePage/privacyAndPolicy';
import VehicleStatus from './src/User/vehicleCheckpoint/vehicleStatus';
import CheckPointModal from './src/User/vehicleCheckpoint/modal/checkPointModal';
import CheckPointDetailModal from './src/User/vehicleCheckpoint/modal/checkPointDetailModal';

import AttributeBasedBooking from './src/User/BasedOnVehiclesSelection//basedOnVehiclesSelection';
import VehiclesInfo from './src/User/BasedOnVehiclesSelection/component/vehicllesInfo';
import SearchBar from './src/User/BasedOnVehiclesSelection/component/searchBar';

import AttributebasedBooking1 from './src/User/searchByAttribute/attributeBasedBooking1';
import AttributebasedBooking2 from './src/User/searchByAttribute/attributeBasedBooking2';
import AttributebasedBooking3 from './src/User/searchByAttribute/attributeBasedBooking3';
import AttributebasedBooking4 from './src/User/searchByAttribute/attributeBasedBooking4';
import favourite from './src/User/FavouriteDriver&Tenant/favourite';
import SearchByAttribute from './src/User/searchByAttribute/searchAttribute';
import VehiclesInfoForAttribute from './src/User/searchByAttribute/component/vehicllesInfo';
import VehicleComponent from './src/User/searchByAttribute/component/vehiclesComponent';
import TopTenant from './src/User/searchByAttribute/component/topTenants';
import SearchBarForAttribute from './src/User/searchByAttribute/component/searchBar';
import Dashboard from './src/User/dashboard/dashboard';
import AttributeModal from './src/User/modal/attributeModal';
import Favourite from './src/User/FavouriteDriver&Tenant/favourite';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
        {/*
          <Stack.Group screenOptions={{ headerShown: false }}>
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
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="OPTVerification" component={OPTVerification} />
            <Stack.Screen
              name="VerificationSuccessfulModal"
              component={VerificationSuccessfulModal}
            />

            <Stack.Screen name="ChangePasswordModal" component={ChangePasswordModal}/>
          </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
          />

          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
          />
          <Stack.Screen
            name="PrivacyAndPolicy"
            component={PrivacyAndPolicy}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="VehicleStatus" component={VehicleStatus} />
          <Stack.Screen name="CheckPointModal" component={CheckPointModal} />
          <Stack.Screen name="CheckPointDetailModal" component={CheckPointDetailModal} />
        </Stack.Group>


        <Stack.Group>
          <Stack.Screen name="AttributeBasedBooking" component={AttributeBasedBooking} />
          <Stack.Screen name="VehiclesInfo" component={VehiclesInfo} />
          <Stack.Screen name="SearchBar" component={SearchBar} />
        </Stack.Group>

                  */}

        <Stack.Group>
          <Stack.Screen name="AttributebasedBooking1" component={AttributebasedBooking1} />
          <Stack.Screen name="AttributebasedBooking2" component={AttributebasedBooking2} />
          <Stack.Screen name="AttributebasedBooking3" component={AttributebasedBooking3} />
          <Stack.Screen name="AttributebasedBooking4" component={AttributebasedBooking4} />
          <Stack.Screen name="SearchByAttribute" component={SearchByAttribute} />
          <Stack.Screen name="VehiclesInfoForAttribute" component={VehiclesInfoForAttribute} />
          <Stack.Screen name="VehicleComponent" component={VehicleComponent} />
          <Stack.Screen name="TopTenant" component={TopTenant} />
          <Stack.Screen name="SearchBarForAttribute" component={SearchBarForAttribute} />

          <Stack.Screen name="AttributeModal" component={AttributeModal} />
          <Stack.Screen name="Favourite" component={Favourite } />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider >

  );
}
