import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../theme';

const VerificationSuccessfulModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const handleLoginSubmit = () => {
    onClose();
    navigation.navigate('LoginScreen');
  };
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
                <Icon name="check" size={width * 0.2} style={styles.icon}>
                  {' '}
                </Icon>
              </View>
            </View>
            <Text style={styles.modalTitleText}>Registration Successful</Text>
            <Text style={styles.modalBodyText}>
              Congratulations! Your account is created!
            </Text>
            <Text style={styles.modalBodyText}>
              Please Login to get an amazing experience.
            </Text>
            <Pressable style={styles.button} onPress={handleLoginSubmit}>
              <Text style={styles.textStyle}>Login</Text>
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
    width: width,
    height: height,
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
    backgroundColor: theme.palette.verificationSuccessfulModal.backgroundColor,
  },
  button: {
    backgroundColor: theme.palette.verificationSuccessfulModal.buttonColor,
    borderRadius: width * 0.035,
    padding: width * 0.02,
    marginTop: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    height: height * 0.07,
    borderRadius: width * 0.035,
  },
  textStyle: {
    color: theme.palette.verificationSuccessfulModal.buttonTextColor,
    textAlign: 'center',
  },
  modalTitleText: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.08,
    width: width * 0.9,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    marginTop: height * 0.02,
  },
  modalBodyText: {
    textAlign: 'center',
    fontSize: width * 0.04,
    width: width * 1,
    height: height * 0.03,
    color: theme.palette.verificationSuccessfulModal.modalBodyText,
  },
  outerRoundView: {
    backgroundColor: theme.palette.verificationSuccessfulModal.outerViewColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    aspectRatio: 1,
    borderRadius: width * 0.5,
  },
  innerRoundView: {
    backgroundColor: theme.palette.verificationSuccessfulModal.innerViewColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.25,
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

export default VerificationSuccessfulModal;
