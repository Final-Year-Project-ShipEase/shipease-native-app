import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import theme from '../../../../theme';


const VehiclesInfo = () => {

return (
    <View style={[styles.pages]}>
      <View style={[styles.truckComponent, styles.truckLayout1]}>
        <View style={[styles.textArea, styles.textPosition]}>
          <View style={[styles.buttons4, styles.buttonsPosition]}>
            <Text style={styles.addNew4}>Available</Text>
          </View>
          <View style={[styles.jumboTrailerParent, styles.parentPosition]}>
            <Text style={[styles.jumboTrailer, styles.boxTruckTypo]}>
              JUMBO TRAILER
            </Text>
            <View style={styles.faisalabadParent}>
              <Text
                style={[styles.faisalabad, styles.faisalabadTypo]}
              >{`Faisalabad  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupChildPosition1]}
                contentFit="cover"
                source={require("./dot.png")}
              />
              <Text style={[styles.tbf7393, styles.r521Typo]}>TBF7393</Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                contentFit="cover"
                source={require("./dot.png")}
              />
              <Text style={[styles.r521, styles.r521Typo]}>R-521</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.stockPhotoEindhovenTheNethIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./vehicleimage.png")}
        />
      </View>
    </View>
);
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    pages: {
        color: theme.palette.alreadyAccount.textColor,
    },

    truckComponent: {
        top: 201,
        height: 87,
        left: 29,
        width: 316,
      },

      truckLayout1: {
        width: 316,
        height: 87,
        position: "absolute",
      },

      textArea: {
        width: "64.87%",
        left: "35.13%",
        right: "0%",
        bottom: "13.22%",
        top: "14.94%",
        height: "71.84%",
        position: "absolute",
      },

      textPosition: {
        bottom: "13.22%",
        top: "14.94%",
        height: "71.84%",
      },

      addNew4: {
        fontSize: 14,
        textAlign: "left",
        color: theme.palette.alreadyAccount.textColor,
      },
      buttons4: {
        width: "30.73%",
        right: "69.27%",
        left: "0%",
      },

      buttonsPosition: {
        backgroundColor:theme.palette.dashboard.mainblue,
        borderRadius: 14,
        bottom: "60%",
        top: "8%",
        height: "32%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },

      parentPosition: {
        top: "44.8%",
        height: "55.2%",
        bottom: "0%",
      },

      jumboTrailerParent: {
        width: "92.15%",
        right: "7.85%",
        left: "0%",
        position: "absolute",
      },

      boxTruckTypo: {
        color: theme.palette.dashboard.mainblue,
        fontSize: 14,
        textAlign: "left",
        top: "0%",
        height: "100%",
        fontWeight: "700",
      },

      jumboTrailer: {
        left: "0%",
        position: "absolute",
        width: "100%",
      },

      faisalabadParent: {
        width: "80.47%",
        right: "19.53%",
        bottom: "7.25%",
        top: "49.28%",
        height: "43.48%",
        left: "0%",
        position: "absolute",
      },

      faisalabad: {
        width: "43.42%",
        left: "0%",
        position: "absolute",
      },

      faisalabadTypo: {
        color: theme.palette.dashboard.mainblue,
        fontSize: 14,
        textAlign: "left",
        top: "0%",
        height: "100%",
        fontWeight: "300",
      },

      groupChild: {
        right: "29.61%",
        left: "69.08%",
        width: "1.32%",
        height: "13.33%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      tbf7393: {
        left: "41.45%",
      },

      r521Typo: {
        width: "26.97%",
        color: theme.palette.dashboard.mainblue,
        fontSize: 14,
        textAlign: "left",
        top: "0%",
        height: "100%",
        fontWeight: "300",
        position: "absolute",
      },

      r521: {
        left: "73.03%",
      },

      groupItem: {
        right: "59.87%",
        left: "38.82%",
        width: "1.32%",
        height: "13.33%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      groupPosition: {
        bottom: "40%",
        top: "46.67%",
      },

      groupChildPosition1: {
        bottom: "46.67%",
        top: "40%",
      },

      islamabadParentPosition: {
        width: 152,
        bottom: "7.25%",
        left: 0,
        position: "absolute",
      },
      islamabadLayout: {
        width: 66,
        left: 0,
      },
      groupChildLayout: {
        width: 2,
        height: "13.33%",
        maxHeight: "100%",
        position: "absolute",
      },

      stockPhotoEindhovenTheNethIcon1: {
        right: "70.25%",
        width: "29.75%",
        borderRadius: 14,
        maxHeight: "100%",
        maxWidth: "100%",
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        overflow: "hidden",
        display: "none",
      },

      iconLayout: {
        borderRadius: 14,
        position: "absolute",
      },

      truckComponent51: {
        height: 87,
        top: 0,
        left: 0,
      },
      image11Icon: {
        width: 94,
        height: 87,
        top: 0,
        left: 0,
      },
      truckComponent5: {
        top: 492,
        height: 87,
        left: 29,
        width: 316,
      },
      buttons6: {
        width: 63,
        left: 0,
      },

});

export default VehiclesInfo;