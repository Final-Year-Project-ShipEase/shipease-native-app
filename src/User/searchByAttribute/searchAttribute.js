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
import VehiclesInfo from './component/vehicllesInfo';
import AttributeModal from '../modal/attributeModal';


const SearchByAttribute = () => {
      

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
      <View style = {[styles.vehiclesinfo]}>
      <VehiclesInfo />
      </View>
      <View style = {[styles.vehiclesinfo1]}>
      </View>
      <AttributeModal />
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

});

export default SearchByAttribute;