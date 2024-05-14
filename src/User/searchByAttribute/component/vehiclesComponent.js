import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../../theme';

const VehicleComponent = () => {

  const navigation = useNavigation();
  

  const handleSearchByVehicle = () => {
    navigation.navigate('AttributebasedBooking2');
  };
  return (
    <View>
    <Pressable style={styles.button} onPress={handleSearchByVehicle}>
    <View style={styles.component1}>
      <View style={styles.bestVehicle}>
        <View style={styles.bestVehicleChild} />
        <View style={[styles.bestVehicleItem, styles.bestPosition]} />
        <View style={[styles.bestVehicleInner, styles.bestPosition]} />
      </View>
      <View style={styles.card1}>
        <Image
          style={styles.stockPhotoEindhovenTheNethIcon}
          contentFit="cover"
          source={require("../../../../assets/searchatrributeimage1.png")}
        />
        <View style={[styles.bestVehicleText, styles.bestLayout]}>
          <View style={[styles.bestVehicleTextChild, styles.bestLayout]} />
          <View style={styles.jumboTrailerParent}>
            <Text style={styles.jumboTrailer}>JUMBO TRAILER</Text>
            <View style={styles.faisalabadParent}>
              <Text style={styles.faisalabad}>{`Faisalabad  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupLayout]}
                contentFit="cover"
                source={require("../component/dot.png")}
              />
              <Text style={[styles.tbf7393, styles.r521Typo]}>TBF7393</Text>
              <Image
                style={[styles.groupItem, styles.groupLayout]}
                contentFit="cover"
                source={require("../component/dot.png")}
              />
              <Text style={[styles.r521, styles.r521Typo]}>R-521</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
    <Pressable style={styles.button} onPress={handleSearchByVehicle}>
    <View style={styles.component2}>
      <View style={styles.bestVehicle}>
        <View style={styles.bestVehicleChild} />
        <View style={[styles.bestVehicleItem, styles.bestPosition]} />
        <View style={[styles.bestVehicleInner, styles.bestPosition]} />
      </View>
      <View style={styles.card1}>
        <Image
          style={styles.stockPhotoEindhovenTheNethIcon}
          contentFit="cover"
          source={require("../../../../assets/searchatrributeimages2..png")}
        />
        <View style={[styles.bestVehicleText, styles.bestLayout]}>
          <View style={[styles.bestVehicleTextChild, styles.bestLayout]} />
          <View style={styles.jumboTrailerParent}>
            <Text style={styles.jumboTrailer}>Box Truck</Text>
            <View style={styles.faisalabadParent}>
              <Text style={styles.faisalabad}>{`Isalamabad  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupLayout]}
                contentFit="cover"
                source={require("../component/dot.png")}
              />
              <Text style={[styles.tbf7393, styles.r521Typo]}>TBDS212</Text>
              <Image
                style={[styles.groupItem, styles.groupLayout]}
                contentFit="cover"
                source={require("../component/dot.png")}
              />
              <Text style={[styles.r521, styles.r521Typo]}>R-213</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    bestPosition: {
        backgroundColor: theme.palette.dashboard.lightgray,
        height: height * 0.006,
        borderRadius: width * 0.03,
        top: height * 0,
        width: width * 0.017,
        position: "absolute",
      },
      bestLayout: {
        height: height * 0.05,
        position: "absolute",
      },
      groupLayout: {
        width: width * 0.01,
        height: height * 0.003,
        maxHeight: height,
        maxWidth: width,
        position: "absolute",
        overflow: "hidden",
      },
      r521Typo: {
        width: width * 0.2,
        color: theme.palette.alreadyAccount.textColor,
        fontWeight: "400",
        fontSize: height * 0.014,
        textAlign: "left",
        top: height * 0,
        height: height,
        position: "absolute",
      },
      bestVehicles: {
        width: width * 0.9,
        fontSize: height * 0.024,
        textAlign: "left",
        color: theme.palette.dashboard.black,
        fontWeight: "700",
        left: width * 0.0001,
        top: height * 0.72,
        height: height,
        position: "absolute",
      },
      bestVehicleChild: {
        height: height * 0.01,
        right: width * 0,
        bottom: width * 0,
        left:  width * 0.1,
        backgroundColor: theme.palette.dashboard.mainblue,
        transform: [
          {
            rotate: "180deg",
          },
        ],
        borderRadius: width *0.03,
        top: height * -0.9,
        width: width * 0.06,
        position: "absolute",
      },
      bestVehicleItem: {
        left: width * 0.48,
        right: width * 0,
      },
      bestVehicleInner: {
        right: width * 0,
        left: width * 0.853,
      },
      bestVehicle: {
        height: height * 0.3,
        width: width * 0.9,
        top: height * -0.77,
        right: width * 0,
        bottom: height * 0,
        left: width * 0.04,
        position: "absolute",
      },
      bestVehicleTextChild: {
        top:height * 0,
        left: width * 0,
        backgroundColor:  theme.palette.dashboard.lightgray,
        shadowColor: theme.palette.dashboard.vehiclesshadowColor,
        shadowOffset: {
          width: 0,
          height: height * 0.4,
        },
        shadowRadius:width * 0.3,
        elevation: 4,
        shadowOpacity: 10,
        width: width *0.44,
      },

      jumboTrailer: {
        fontSize: height * 0.018,
        textAlign: "center",
        color:  theme.palette.dashboard.black,
        fontWeight: "700",
        top: height * 0,
        height: height,
        left: width * 0,
        position: "absolute",
        width: width * 0.4,
      },
      faisalabad: {
        width: width * 0.3,
        color: theme.palette.alreadyAccount.textColor,
        fontWeight: "300",
        fontSize: height * 0.014,
        textAlign: "left",
        left: width * -0.04,
        height: height,
        position: "absolute",
      },
      groupChild: {
        top: height * 0.007,
        right: 0,
        left: width * 0.12,
      },
      tbf7393: {
        left:width * 0.13,
      },
      groupItem: {
        top: height * 0.007,
        right: 0,
        left: width * 0.27,
      },
      r521: {
        left: width * 0.28,
      },
      faisalabadParent: {
        height: height * 0.1,
        width: width * 0.1,
        top: width * 0.046,
        right: "5.24%",
        bottom: "7.25%",
        left: "14.29%",
        position: "absolute",
      },
      jumboTrailerParent: {
        height: "86.25%",
        top: "12.5%",
        bottom: "1.25%",
        right: "0%",
        left: "-1%",
        position: "absolute",
        width: "100%",
      },
    bestVehicleText: {
      top: 133,
      left: 0,
      width: 189,
    },
    card1: {
      height: "21.31%",
      width: "50.37%",
      top: "7.51%",
      right: "45.89%",
      bottom: "71.18%",
      left: "3.73%",
      position: "absolute",
    },
    component1: {
        top: height * 0.1,
      },
      component2: {
        top: height * 0.1,
        marginLeft: height * 0.23,
      },

});

export default VehicleComponent;
