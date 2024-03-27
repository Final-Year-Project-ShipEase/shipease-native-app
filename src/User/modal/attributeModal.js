import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../theme';

const attributeModal = ({ visible, onClose }) => {
    
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleBookingPress = () => {
        console.log("modal open");
        handleOpenModal();
      };

      const navigation = useNavigation();

      const handleButtonPress = () => {
        navigation.navigate('AttributebasedBooking1');
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
          <ImageBackground
            style={[styles.modalView, styles.ImageBackground]}
            source={require("../../../assets/rectangle1.png")}
          >
            <View style={styles.outerRoundView}>
              <View style={styles.innerRoundView}>
              <Image
                    source={require('../../../assets/attributeicon1.png')}
                    style={{ width: width * 0.1, height: width * 0.1 }}
                />
              </View>
            </View>
            <Text style={styles.modalTitleText}>Search By Attribute</Text>
            <Text style={styles.modalTitleText1}>Please Enter Shipped Item &
              it’s dimension in length and width</Text>
              <Text style={styles.modalTitleText2}>Enter Dimensions</Text>

            <View style={styles.form}>
              <TextInput
                label="Enter Specific Item"
                mode="flat"
                selectionColor={theme.palette.changePasswordModal.inputColor}
                textColor={theme.palette.changePasswordModal.textColor}
                underlineColor={theme.palette.changePasswordModal.inputColor}
                activeUnderlineColor={
                  theme.palette.changePasswordModal.inputColor
                }
                style={styles.passwordInput}
              />
            </View>
            <View style={styles.form1}>
              <TextInput
                label="length"
                mode="flat"
                selectionColor={theme.palette.changePasswordModal.inputColor}
                textColor={theme.palette.changePasswordModal.textColor}
                underlineColor={theme.palette.changePasswordModal.inputColor}
                activeUnderlineColor={
                  theme.palette.changePasswordModal.inputColor
                }
                style={styles.passwordInput}
              />
              <TextInput
                label="Width"
                mode="flat"
                selectionColor={theme.palette.changePasswordModal.inputColor}
                textColor={theme.palette.changePasswordModal.textColor}
                underlineColor={theme.palette.changePasswordModal.inputColor}
                activeUnderlineColor={
                  theme.palette.changePasswordModal.inputColor
                }
                style={styles.passwordInput}
              />
            </View>
            <Pressable style={styles.button} onPress={handleButtonPress} accessible={true} accessibilityLabel="Booking">
              <Text style={styles.textStyle}>Book</Text>
            </Pressable>
          </ImageBackground>
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
    borderTopRightRadius: width * 0.1,
    padding: width * 0.09,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: height * 0.2,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width *1.1,
    height: height * 0.79,
    backgroundColor: 'transparent',
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
    marginBottom: height * 0.01,
    top: height * -0.25,
  },
  textStyle: {
    color: theme.palette.changePasswordModal.buttonTextColor,
    backgroundColor: theme.palette.changePasswordModal.buttonBackgroundColor,
    textAlign: 'center',
  },
  modalTitleText: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.06,
    width: width * 0.9,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * 0.4,
    marginTop: height * 0.02,
    top:height * 0.02,
  },
  modalTitleText1: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.04,
    width: width * 0.6,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
    top:height * -0.02,
  },
  modalTitleText2: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.05,
    width: width * 0.6,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * -0.20,
    marginTop: height * 0.02,
    top:height * 0.03,
  },
  form: {
    width: width * 0.8,
    height: height * 0.08,
    marginBottom: height * 0.02,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: height * 0.05,
    top: height * -0.18,
  },
  form1: {
    width: width * -1,
    flexDirection: 'row',
    marginTop: height * 0.05,
    top: height * -0.23,
  },
  passwordInput: {
    marginTop: height * 0.02,
    backgroundColor: 'transparent',
    fontSize: width * 0.05,
    marginRight: width * 0.12,
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
    top: height * 0.03,
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

export default attributeModal;
