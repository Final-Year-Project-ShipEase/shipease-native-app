import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ScreenOne from '../../../assets/ScreenOne.png';
import ChangePasswordModal from '../modal/changePasswordModal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import theme from '../../../theme';

const ForgetPassword = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={ScreenOne}
          style={styles.logo}
          resizeMode="contain"
        ></Image>
      </View>

      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
          console.log(values);
          handleOpenModal();
          setSubmitting(false);
        }}
      >
        {(formikProps) => (
          <View style={styles.form}>
            <TextInput
              label="Email"
              mode="outlined"
              placeholder="Enter Email"
              style={styles.textInput}
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              value={formikProps.values.email}
              error={formikProps.touched.email && formikProps.errors.email}
            />
            {formikProps.touched.email && formikProps.errors.email && (
              <Text style={styles.errorText}>{formikProps.errors.email}</Text>
            )}

            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                textColor={theme.palette.login.textColorLogin}
                style={styles.buttonLogin}
                onPress={formikProps.handleSubmit}
              >
                Submit
              </Button>
            </View>
          </View>
        )}
      </Formik>
      <ChangePasswordModal visible={showModal} onClose={handleCloseModal} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width,
    height: height,
  },
  logoContainer: {
    width: width * 0.8,
    height: height * 0.4,
    marginTop: height * 0.06,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3,
  },
  form: {
    width: width * 0.8,
    marginBottom: height * 0.02,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: height * 0.02,
  },
  textInput: {
    marginBottom: height * 0.02,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    marginTop: height * 0.04,
  },
  buttonLogin: {
    width: width * 0.35,
    height: height * 0.07,
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: theme.palette.login.backgroundColorLogin,
  },
  errorText: {
    color: 'red',
    marginBottom: height * 0.02,
  },
});
export default ForgetPassword;
