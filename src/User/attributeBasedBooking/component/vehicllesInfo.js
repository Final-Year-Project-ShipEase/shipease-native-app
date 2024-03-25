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
                style={[styles.groupItem, styles.groupPositAion]}
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


});

export default VehiclesInfo;