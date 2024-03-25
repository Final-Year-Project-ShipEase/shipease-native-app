import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import theme from '../../../../theme';

const userInfo = () => {
  return (
    <View>
      <View style={styles.bestVehicle}>
        <View style={[styles.move, styles.movePosition]}>
          <View style={styles.moveChild} />
          <View style={[styles.moveItem, styles.moveLayout]} />
          <View style={[styles.moveInner, styles.moveLayout]} />
        </View>
        <Image
          style={styles.card8Icon}
          contentFit="cover"
          source={require("../components/vehicle1.png")}
        />
        <View style={[styles.bestVehicleText, styles.bestLayout]}>
          <View style={[styles.bestVehicleTextChild, styles.bestLayout]} />
          <View style={styles.faisalabadParent}>
            <Text
              style={[styles.faisalabad, styles.r532Typo]}
            >{`Faisalabad  `}</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../components/dot.png")}
            />
            <Text style={[styles.sh13322, styles.r532Typo]}>SH13322</Text>
            <Image
              style={[styles.ellipseIcon, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../components/dot.png")}
            />
            <Text style={[styles.r532, styles.r532Typo]}>R-532</Text>
          </View>
          <Text style={[styles.boxTruck, styles.seeAllTypo]}>Box Truck</Text>
        </View>
        <View style={styles.component2}>
          <View style={[styles.component2Child, styles.component2Position]} />
          <View style={[styles.component2Item, styles.component2Position]} />
          <Text style={[styles.rating, styles.text2Typo]}>Rating</Text>
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text style={styles.text2Typo}>7.3</Text>
            <Text style={styles.r532Typo}>/10</Text>
          </Text>
        </View>
      </View>
    </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    bestVehicle: {
        height: "20.94%",
        width: "90.93%",
        top: "22.07%",
        right: "4.53%",
        bottom: "56.99%",
        left: "4.53%",
        position: "absolute",
      },

      movePosition: {
        bottom: "0%",
        position: "absolute",
      },

      moveLayout: {
        backgroundColor: theme.palette.alreadyAccount.textColor,
        width: "17.14%",
        height: "100%",
        borderRadius: 14,
        bottom: "0%",
        top: "0%",
        position: "absolute",
      },

      moveItem: {
        left: "82.86%",
        right: "0%",
      },

      moveInner: {
        right: "25.71%",
        left: "57.14%",
      },

      move: {
        height: "3.25%",
        width: "10.26%",
        top: "96.75%",
        right: "44.28%",
        left: "45.45%",
      },

      moveChild: {
        height: "227.85%",
        width: "22.57%",
        right: "26%",
        bottom: "-127.85%",
        left: "51.43%",
        transform: [
          {
            rotate: "90deg",
          },
        ],
        borderRadius: 14,
        backgroundColor: theme.palette.dashboard.mainblue,
        top: "0%",
        position: "absolute",
      },

      card8Icon: {
        height: 224,
        width: 341,
        top: 0,
        left: 0,
        position: "absolute",
      },

      bestVehicleText: {
        top: 166,
      },

      bestLayout: {
        height: 58,
        width: 341,
        left: 0,
        position: "absolute",
      },

      bestVehicleTextChild: {
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        backgroundColor: "rgba(54, 52, 52, 0.75)",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        top: 0,
      },

      sh13322: {
        width: "30.05%",
        left: "44.26%",
        fontSize: 14,
        height: "100%",
        top: "0%",
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      ellipseIcon: {
        right: "57.92%",
        left: "40.98%",
      },

      r532: {
        width: "22.4%",
        left: "77.6%",
        fontSize: 14,
        height: "100%",
        top: "0%",
        color:theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      faisalabad: {
        width: "43.17%",
        fontSize: 14,
        height: "100%",
        top: "0%",
        left: "0%",
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      faisalabadParent: {
        height: "27.59%",
        width: "53.67%",
        top: "53.45%",
        right: "41.35%",
        bottom: "18.97%",
        left: "4.99%",
        position: "absolute",
      },

      boxTruck: {
        height: "46.55%",
        width: "43.99%",
        top: "6.9%",
        fontSize: 14,
        left: "4.99%",
        color: theme.palette.alreadyAccount.textColor,
      },

      adminSidebarcollapsable22: {
        width: 23,
        left: 295,
        top: 6,
      },

      bestVehicleText: {
        top: 166,
      },

      r532Typo: {
        fontWeight: "300",
      },

      groupInner: {
        right: "24.59%",
        left: "74.32%",
      },

      groupInnerLayout: {
        bottom: "20%",
        top: "66.88%",
        width: "1.09%",
        height: "13.13%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      seeAllTypo: {
        fontWeight: "700",
        textAlign: "left",
        position: "absolute",
      },

      component2Child: {
        right: "53.76%",
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13,
        left: "0%",
        backgroundColor: theme.palette.dashboard.mainblue,
        width: "46.24%",
      },

      component2Item: {
        right: "7.53%",
        left: "46.24%",
        backgroundColor: theme.palette.dashboard.mainblue,
        borderBottomRightRadius: 13,
        borderTopRightRadius: 13,
      },

      component2: {
        left: 13,
        width: 93,
        top: 13,
        height: 28,
        position: "absolute",
      },

      component2Position: {
        width: "46.24%",
        height: "100%",
        bottom: "0%",
        top: "0%",
        position: "absolute",
      },

      rating: {
        left: "4.3%",
        fontSize: 14,
        top: "21.43%",
        width: "45.16%",
        height: "46.43%",
        color:  theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      text2Typo: {
        fontWeight: "500",
      },

      text1: {
        left: "54.84%",
      },

      text1Typo: {
        fontSize: 14,
        top: "21.43%",
        width: "45.16%",
        height: "46.43%",
        color:  theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },


      



});

export default userInfo;