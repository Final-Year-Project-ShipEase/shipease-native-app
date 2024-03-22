import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import theme from '../../../theme';
import ScreenOne from '../../../assets/ScreenOne.png';
import { useNavigation } from '@react-navigation/native';
import ChangePasswordModal from '../modal/changePasswordModal';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleForgetPassword = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigation.navigate('LoginScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={ScreenOne} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Welcome to Shipease</Text>
        <Text style={styles.content}>Login to get started</Text>
      </View>

      <View style={styles.form}>
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
        <Pressable onPress={handleForgetPassword}>
            <Text style={styles.forgetPassword}> Forget Password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          textColor={theme.palette.login.textColorLogin}
          style={styles.buttonLogin}
        >
          Login
        </Button>
        <Button
          mode="contained"
          textColor={theme.palette.login.textColorRegistration}
          style={styles.buttonRegistration}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        >
          Register
        </Button>

        <ChangePasswordModal visible={showModal} onClose={closeModal} />
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
    marginBottom: height * 0.02,
    marginTop: height * 0.08
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
    marginTop: height * 0.06
  },
  textInput: {
    marginBottom: height * 0.02,
    backgroundColor: 'transparent',
    //circular border
    //borderRadius: width * 0.06,
    //borderWidth: 2,
    //borderColor: theme.palette.registration.borderColor,
  },
 forgetPassword: {
    fontSize: width * 0.04,
    color: theme.palette.login.forgetPasswordTextColor,
    fontStyle: 'italic',
    fontWeight: 'bold'
 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    marginTop: height * 0.04,
  },
  buttonRegistration: {
    width: width * 0.35,
    height: height * 0.07,
    justifyContent: 'center',
    borderRadius: width * 0.05,
    marginLeft: width* 0.08,
    backgroundColor: theme.palette.login.backgroundColorRegistration,
  },
  buttonLogin: {
    width: width * 0.35,
    height: height * 0.07,
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: theme.palette.login.backgroundColorLogin,
  },
});

export default LoginScreen;
