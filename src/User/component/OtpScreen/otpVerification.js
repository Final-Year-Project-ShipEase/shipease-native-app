import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-paper';
import { OtpInput } from 'react-native-otp-entry';
import theme from '../../../../theme';
import truck from '../../../../assets/truck.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import VerificationSuccessfulModal from '../../modal/verificationSuccessfulModal';

const OTPVerification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [showModal, setShowModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState('');
  const otpCode = route.params?.otpCode; // Retrieve OTP code from route params

  const handleOtpSubmit = () => {
    if (enteredOTP === otpCode) { // Compare entered OTP with received OTP code
      setShowModal(true);
    } else {
      setShowSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const closeModal = () => {
    setShowModal(false);
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerRoundView}>
        <View style={styles.innerRoundView}>
          <Image source={truck} style={styles.image} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.verificationContent}>
        <Text style={styles.titleContent}>Enter Verification Code</Text>
        <Text style={styles.bodyContent}>
          A code has been sent to your email
        </Text>

        <OtpInput
          numberOfDigits={4}
          focusColor={theme.palette.otpVerification.otpCode}
          theme={{ containerStyle: styles.otpContainer }}
        />
      </View>

      <View style={styles.confirmOTP}>
        <Button
          mode="contained"
          style={styles.buttonRegistration}
          onPress={handleOtpSubmit}
        >
          Register
        </Button>
      </View>

      <View style={styles.resend}>
        <Text>Don't receive a code? </Text>
        <Pressable>
          <Text
            style={{
              color: theme.palette.otpVerification.buttonText,
            }}
          >
            Resend
          </Text>
        </Pressable>
      </View>
      <VerificationSuccessfulModal visible={showModal} onClose={closeModal} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.1,
  },
  outerRoundView: {
    width: width * 0.4,
    aspectRatio: 1,
    borderRadius: width * 0.5,
    backgroundColor: theme.palette.otpVerification.outerRoundView,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRoundView: {
    width: width * 0.3,
    aspectRatio: 1,
    borderRadius: width * 0.5,
    backgroundColor: theme.palette.otpVerification.innerRoundView,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.5,
    aspectRatio: 1,
  },
  verificationContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: height * 0.02,
  },
  titleContent: {
    color: theme.palette.otpVerification.titleContentColor,
    fontSize: width * 0.07,
    marginBottom: height * 0.01,
  },
  bodyContent: {
    color: theme.palette.otpVerification.bodyContentColor,
    textAlign: 'center',
    marginBottom: height * 0.06,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.5,
  },
  confirmOTP: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.04,
  },
  buttonRegistration: {
    width: width * 0.4,
    justifyContent: 'center',
    borderRadius: width * 0.9,
    marginTop: height * 0.04,
    backgroundColor: theme.palette.otpVerification.buttonText,
  },
  resend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: height * 0.02,
  },
});

export default OTPVerification;
