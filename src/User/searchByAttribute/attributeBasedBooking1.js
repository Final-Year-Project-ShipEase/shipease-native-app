import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import theme from '../../../theme';
import SearchBar from './component/searchBar';
import TopTenant from './component/topTenants';
import VehiclesComponent from './component/vehiclesComponent';


const AttributebasedBooking = () => {

return (
    <View style={[styles.pages]}>
      <View style={[styles.SearchBar]}>
      <SearchBar/>
      </View>
      <Pressable onPress={''}>
      <View style={styles.buttons}>
        <Text style={[styles.addNew, styles.addTypo]}>All</Text>
      </View>
      </Pressable>
      <Pressable onPress={''}>
      <View style={[styles.buttons1, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>FLATBED</Text>
      </View>
      </Pressable>
      <Pressable onPress={''}>
      <View style={[styles.buttons2, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>Box</Text>
      </View>
      </Pressable>
      <Pressable onPress={''}>
      <View style={[styles.buttons3, styles.buttonsBorder]}>
        <Text style={[styles.addNew1, styles.addTypo]}>Jumbo</Text>
      </View>
      </Pressable>
      <View style={[styles.topTenants]}>
        <TopTenant/>
      </View>
      <Pressable onPress={''}>
      <View style={[styles.VehiclesComponent]}>
        <VehiclesComponent/>
      </View>
      </Pressable>
      <View style={styles.component1}>
      <View style={styles.bestVehicle}>
        <Text style={styles.bestVehicles}>Best Vehicles</Text>
        </View>
        </View>
        <Pressable onPress={''}>
      <View style={[styles.VehiclesComponent2]}>
        <VehiclesComponent/>
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

    buttons: {
        backgroundColor: theme.palette.dashboard.mainblue,
        width: width * 0.16,
        padding: width * 0.01,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: height * 0.05,
        top: height * 0.11,
        left: width * 0.07,
        borderRadius: width * 0.04,
        position: "absolute",
      },
    
      addNew: {
        color: theme.palette.alreadyAccount.textColor,
      },

      addTypo: {
        fontSize: width * 0.034,
        textAlign: "left",
        fontFamily: theme.palette.FontFamily.regular,
      },

      buttons1: {
        left: width * 0.26,
        top: height * 0.11,
        width: width * 0.23,
      },

      buttons2: {
        left: width * 0.52,
        top: height * 0.11,
        width: width * 0.16,
      },

      buttons3: {
        left: width * 0.72,
        top: height * 0.11,
        width: width * 0.18,
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

      vehiclesinfo: {
        top: height * 0.15
      },

      vehiclesinfo1: {
        top: height * 0.28
      },

      topTenants:{
        top:Dimensions.get('window').height * 0.165,
      },

      VehiclesComponent: {
        top: height * 0.3,
      },

      VehiclesComponent2: {
        top: height * 0.54,
      },

      bestVehicle: {
        height: height * 0.3,
        width: width * 0.9,
        top: height * 0.34,
        right: width * 0,
        bottom: height * 0,
        left: width * 0.04,
        position: "absolute",
      },

      bestVehicles: {
        width: width * 0.9,
        fontSize: height * 0.024,
        textAlign: "left",
        color: theme.palette.dashboard.black,
        fontWeight: "700",
        left: width * 0.0001,
        top: height * 0.01,
        height: height,
        position: "absolute",
      },


});

export default AttributebasedBooking;