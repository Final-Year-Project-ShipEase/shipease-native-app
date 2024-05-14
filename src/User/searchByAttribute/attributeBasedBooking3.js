import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import theme from '../../../theme';
import VehiclesInfo from './component/vehicllesInfo';
import BookingInfo from './component/BookingInfo';

const AttributeBasedBookingSearch3 = () => {
  return (
    <View style={[styles.pages]}>
    <View style = {[styles.vehiclesinfo]}>
    <VehiclesInfo />
    </View>
    <View style = {[styles.bookinginfo]}>
    <BookingInfo />
    </View>
    <Pressable onPress={''}>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Go back</Text>
        </View>
        </Pressable>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    pages: {
        color: theme.palette.alreadyAccount.textColor,
    },

    vehiclesinfo: {
        top: height * 0.01
      },

      bookinginfo: {
        top: height * -0.05
      },

      buttonsFlexBox: {
        justifyContent: "center",
        alignItems: "center",
      },

      buttons: {
        top: 630,
        left: 44,
        borderRadius: 12,
        width: 282,
        height: 46,
        padding: 12,
        flexDirection: "row",
        position: "absolute",
        backgroundColor: theme.palette.dashboard.mainblue,
        justifyContent: "center",
      },

      loginTypo: {
        fontWeight: "600",
        textAlign: "center",
      },

      login: {
        fontSize: 12,
        color: theme.palette.alreadyAccount.textColor,
      },

    });

export default AttributeBasedBookingSearch3;
