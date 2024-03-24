import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from '../../homePage/editProfile';
import Settings from '../../homePage/settings';
import HomeScreen from '../../homePage/homeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown: false,
          }}
        >
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              height: 20,
              width: 20,
              tabBarActiveTintColor: 'green',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
});
export default BottomNavigationBar;
