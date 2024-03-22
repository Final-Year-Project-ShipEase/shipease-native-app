import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import theme from '../../../theme';
import ScreenOne from '../../../assets/ScreenOne.png';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={ScreenOne} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Welcome to Shipease</Text>
        <Text style={styles.content}>Complete the sign up to get started</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Name"
          mode="outlined"
          placeholder="Enter Name"
          style={styles.textInput}
        />
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="Enter Email"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          placeholder="Enter Password"
          style={styles.textInput}
          right={<TextInput.Icon icon="eye" />}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox.Item
            status="checked"
            color={theme.palette.primary.main}
            mode="android"
          />
          <Text style={styles.checkboxText}>
            By signing up, you agree to the{' '}
            <Pressable>
              <Text style={{ color: theme.palette.primary.main }}>
                Terms of Service and Privacy Policy
              </Text>
            </Pressable>
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          textColor={theme.palette.registration.textColorLogin}
          style={styles.buttonLogin}
          onPress={() => {navigation.navigate('LoginScreen')}}
        >
          Login
        </Button>
        <Button
          mode="contained"
          textColor={theme.palette.registration.textColorRegistration}
          style={styles.buttonRegistration}
          onPress={() => {
            navigation.navigate('OTPVerification');
          }}
        >
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.04,
  },
  image: {
    width: width,
    height: height * 0.25,
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: height * 0.045,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  content: {
    fontSize: height * 0.025,
    color: theme.palette.text,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  form: {
    width: width * 0.8,
    marginBottom: height * 0.02,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: height * 0.02,
    backgroundColor: 'transparent',
    //circular border
    //borderRadius: width * 0.06,
    //borderWidth: 2,
    //borderColor: theme.palette.registration.borderColor,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    marginLeft: width * -0.064,
  },
  checkboxText: {
    fontSize: height * 0.025,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
  },
  buttonRegistration: {
    width: width * 0.35,
    height: height * 0.07,
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: theme.palette.registration.backgroundColorRegistration,
  },
  buttonLogin: {
    width: width * 0.35,
    height: height * 0.07,
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: theme.palette.registration.backgroundColorLogin,
  },
});

export default SignUpScreen;
