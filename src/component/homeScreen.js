import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import logo from '../assets/Logomark.png';

const HomeScreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>SHIPEASE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00668C',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 36,
  },
});

export default HomeScreen;
