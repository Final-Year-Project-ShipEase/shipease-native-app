import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../theme';
import BookingModal from '../modal/bookingModal';

const PickUpLocationModal = ({ visible, onClose }) => {

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      onClose();
      setShowModal(false);
    };
  
    const handleBookingPress = () => {
        console.log("modal open");
        handleOpenModal();
      };
      

  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);



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
            source={require("../assests/rectangle1.png")}
          >
          <Pressable onPress={() => onClose()}>
            <View style={styles.outerRoundView}>
              <View style={styles.innerRoundView}>
                <Image
                    source={require('../assests/truck1.png')}
                    style={{ width: width * 0.1, height: width * 0.1 }}
                />
              </View>
            </View>
            </Pressable>
            <Text style={styles.modalTitleText}>Select Location</Text>

            <View style={styles.form}>
              <TextInput
                label="Pick-Up Location"
                mode="flat"
                secureTextEntry
                selectionColor={theme.palette.changePasswordModal.inputColor}
                textColor={theme.palette.changePasswordModal.textColor}
                underlineColor={theme.palette.changePasswordModal.inputColor}
                activeUnderlineColor={
                  theme.palette.changePasswordModal.inputColor
                }
                style={styles.passwordInput}
              />
              <TextInput
                label="Drop-Off Location"
                mode="flat"
                secureTextEntry
                selectionColor={theme.palette.dashboard.tenantlightgray}
                textColor={theme.palette.changePasswordModal.textColor}
                underlineColor={theme.palette.changePasswordModal.inputColor}
                activeUnderlineColor={
                  theme.palette.changePasswordModal.inputColor
                }
                style={styles.passwordInput}
              />
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                handleBookingPress();
                onClose();
              }}
              accessible={true}
              accessibilityLabel="Booking"
            >
              <Text style={styles.textStyle}>Started</Text>
              <BookingModal visible={showModal} onClose={handleCloseModal} />
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
    height: height * 0.73,
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
    top: height * -0.12,
  },
  textStyle: {
    color: theme.palette.changePasswordModal.buttonTextColor,
    backgroundColor: theme.palette.changePasswordModal.buttonBackgroundColor,
    textAlign: 'center',
    top: height * 0.02,
    fontSize: 20
  },
  modalTitleText: {
    color: theme.palette.verificationSuccessfulModal.modalTitleText,
    fontSize: width * 0.06,
    width: width * 0.9,
    alignItems: 'center',
    height: height * 0.06,
    marginLeft: width * 0.5,
    marginTop: height * 0.02,
    top:height * -0.08,
  },
  form: {
    width: width * 0.8,
    height: height * 0.08,
    marginBottom: height * 0.02,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: height * 0.05,
    top: height * -0.12,
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
    top: height * -0.08,
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
    marginTop: height * 0.09,
    marginLeft: width * 0.02,
  },
});

export default PickUpLocationModal;
