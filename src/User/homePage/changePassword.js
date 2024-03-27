import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ScreenOne from '../../../assets/ScreenOne.png';
import ChangePasswordModal from '../modal/changePasswordModal';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={ScreenOne}
          style={styles.logo}
          resizeMode="contain"
        ></Image>
      </View>
      <ChangePasswordModal></ChangePasswordModal>
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
});
export default ChangePassword;
