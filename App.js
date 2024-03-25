import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
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
