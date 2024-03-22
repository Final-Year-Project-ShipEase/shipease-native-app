import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../theme';

const ChangePasswordModal = ({ visible, onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.outerRoundView}>
              <View style={styles.innerRoundView}>
                <Icon name="edit" size={width * 0.1} style={styles.icon}>
                  {' '}
                </Icon>
              </View>
            </View>
            <Text style={styles.modalTitleText}>Create Password</Text>
           
           <View style={styles.form}>
            <TextInput label='Password'   mode= 'flat'  secureTextEntry selectionColor={theme.palette.changePasswordModal.inputColor} 
            right={<TextInput.Icon  iconColor={theme.palette.changePasswordModal.iconColor} icon="eye" />}
            textColor={theme.palette.changePasswordModal.textColor}
               underlineColor={theme.palette.changePasswordModal.inputColor} activeUnderlineColor={theme.palette.changePasswordModal.inputColor} style={styles.passwordInput}
               />
              <TextInput label='Confirm Password'   mode= 'flat'  secureTextEntry selectionColor={theme.palette.changePasswordModal.inputColor} 
            right={<TextInput.Icon  iconColor={theme.palette.changePasswordModal.iconColor} icon="eye" />}
            textColor={theme.palette.changePasswordModal.textColor}
               underlineColor={theme.palette.changePasswordModal.inputColor} activeUnderlineColor={theme.palette.changePasswordModal.inputColor} style={styles.passwordInput}
               />
             </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('OTPVerification');
              }}
            >
              <Text style={styles.textStyle}>Change Password</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: width * 0.2,
    borderTopRightRadius: width * 0.2,
    padding: width * 0.09,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width,
    height: height * 0.55,
    backgroundColor: theme.palette.changePasswordModal.modalViewColor,
  },
  button: {
    backgroundColor: theme.palette.verificationSuccessfulModal.buttonColor,
    borderRadius: width * 0.035,
    //padding: width * 0.02,
    marginTop: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
    height: height * 0.07,
    borderRadius: width * 0.08,
    marginBottom: height * 0.01
  },
  textStyle: {
    color: theme.palette.changePasswordModal.buttonTextColor,
    backgroundColor: theme.palette.changePasswordModal.buttonBackgroundColor,
    textAlign: 'center',
  },
  modalTitleText: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.08,
    width: width * 0.9,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * 0.3,
    marginTop: height * 0.02,
  },
  form: {
    width: width * 0.8,
    height: height * 0.08,
    marginBottom: height * 0.02,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: height * 0.05
  },
  passwordInput: {
    marginTop: height * 0.02,
    backgroundColor: 'transparent',
    fontSize: width * 0.05,
    //color: theme.palette.changePasswordModal.inputColor,
    //circular border
    //borderRadius: width * 0.06,
    //borderWidth: 2,
    //borderColor: theme.palette.registration.borderColor,
  },
  outerRoundView: {
    backgroundColor: theme.palette.changePasswordModal.outerViewColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.25,
    aspectRatio: 1,
    borderRadius: width * 0.5,
  },
  innerRoundView: {
    backgroundColor: theme.palette.changePasswordModal.innerViewColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.15,
    aspectRatio: 1,
    borderRadius: width * 0.7 * 0.5,
  },
  icon: {
    color: theme.palette.verificationSuccessfulModal.checkDone,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginLeft: width * 0.02,
  },
});

export default ChangePasswordModal;
