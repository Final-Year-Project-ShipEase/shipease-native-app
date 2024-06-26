import React, { useState } from 'react';
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
import { Formik } from 'formik';
import * as Yup from 'yup';
import theme from '../../../theme';
import ScreenOne from '../../../assets/ScreenOne.png';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsCheckbox = () => {
    setTermsChecked(!termsChecked);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    agreeTerms: Yup.boolean().oneOf([true]),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={ScreenOne} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Welcome to Shipease</Text>
        <Text style={styles.content}>Complete the sign up to get started</Text>
      </View>

      <Formik
        initialValues={{ name: '', email: '', password: '', agreeTerms: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission logic here
          setSubmitting(false);
          navigation.navigate('OTPVerification', { email: values.email });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.form}>
              <TextInput
                label="Name"
                mode="outlined"
                placeholder="Enter Name"
                style={styles.textInput}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <Text style={styles.error}>{touched.name && errors.name}</Text>

              <TextInput
                label="Email"
                mode="outlined"
                placeholder="Enter Email"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.error}>{touched.email && errors.email}</Text>

              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={!showPassword}
                placeholder="Enter Password"
                style={styles.textInput}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={togglePasswordVisibility}
                  />
                }
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text style={styles.error}>
                {touched.password && errors.password}
              </Text>

              <View style={styles.checkboxContainer}>
                <Checkbox.Item
                  status={termsChecked ? 'checked' : 'unchecked'}
                  color={theme.palette.primary.main}
                  mode="android"
                  onPress={handleTermsCheckbox}
                />
                <Text style={styles.checkboxText}>
                  By signing up, you agree to the{' '}
                  <Pressable
                    onPress={() => {
                      navigation.navigate('TermsAndConditions');
                    }}
                  >
                    <Text style={{ color: theme.palette.primary.main }}>
                      Terms of Service and Privacy Policy
                    </Text>
                  </Pressable>
                </Text>
              </View>
              <Text style={styles.error}>
                {touched.agreeTerms && errors.agreeTerms}
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                textColor={theme.palette.registration.textColorLogin}
                style={styles.buttonLogin}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              >
                Login
              </Button>
              <Button
                mode="contained"
                textColor={theme.palette.registration.textColorRegistration}
                style={styles.buttonRegistration}
                disabled={!termsChecked}
                onPress={handleSubmit}
              >
                Register
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.25,
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
    backgroundColor: 'transparent',
    //circular border
    //borderRadius: width * 0.06,
    //borderWidth: 2,
    //borderColor: theme.palette.registration.borderColor,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  error: {
    color: 'red',
    marginBottom: height * 0.02,
  },
});

export default SignUpScreen;
