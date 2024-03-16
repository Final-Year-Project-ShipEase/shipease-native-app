import React from 'react';
import HomeScreen from './src/component/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
