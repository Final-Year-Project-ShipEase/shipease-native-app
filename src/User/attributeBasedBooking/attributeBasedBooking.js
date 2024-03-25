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
import SearchBar from './component/searchBar';
import VehiclesInfo from './component/vehicllesInfo';


const AttributeBasedBooking = () => {

return (
    <View style={[styles.pages]}>
      <View style={[styles.SearchBar]}>
      <SearchBar/>
      </View>
      <View style={styles.buttons}>
        <Text style={[styles.addNew, styles.addTypo]}>All</Text>
      </View>
      <View style={[styles.buttons1, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>FLATBED</Text>
      </View>
      <View style={[styles.buttons2, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>Box</Text>
      </View>
      <View style={[styles.buttons3, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>Jumbo</Text>
      </View>
      <View>
      <VehiclesInfo />
      </View>
    </View>
);
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    pages: {
        color: theme.palette.alreadyAccount.textColor,
    },

    buttons: {
        backgroundColor: theme.palette.dashboard.mainblue,
        width: width * 0.19,
        padding: width * 0.01,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: height * 0.05,
        top: height * 0.11,
        left: width * 0.03,
        borderRadius: width * 0.04,
        position: "absolute",
      },
    
      addNew: {
        color: theme.palette.alreadyAccount.textColor,
      },

      addTypo: {
        fontSize: width * 0.043,
        textAlign: "left",
        fontFamily: theme.palette.FontFamily.regular,
      },

      buttons1: {
        left: width * 0.25,
        top: height * 0.11,
        width: width * 0.26,
      },

      buttons2: {
        left: width * 0.54,
        top: height * 0.11,
        width: width * 0.19,
      },

      buttons3: {
        left: width * 0.76,
        top: height * 0.11,
        width: width * 0.21,
      },

      addNew1: {
        color:  theme.palette.dashboard.darkgray,
      },

      buttonsBorder: {
        borderWidth: 2,
        borderColor: theme.palette.dashboard.darkgray,
        borderStyle: "solid",
        backgroundColor: theme.palette.alreadyAccount.textColor,
        padding: width * 0.01,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: height * 0.05,
        top: height * 0.11,
        borderRadius: width * 0.04,
        position: "absolute",
      },

});

export default AttributeBasedBooking;