import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import theme from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const AttributeBasedBookingSearch1 = () => {
  const navigation = useNavigation();
  

  const handleSearchByVehicle = () => {
    navigation.navigate('AttributebasedBooking3');
  };
  return (
    <View style={styles.attributeBasedBookingSearch}>
      <View
        style={[
          styles.attributeBasedBookingSearchChild,
          styles.component1ItemPosition,
        ]}
      />
      <Image
        style={styles.vehicleImage}
        contentFit="cover"
        source={require("../../../assets/card7.png")}
      />

      <View style={styles.Rectangle}>
        <View style={styles.RectangleChild} />
      </View>
      <View style={styles.cityParent}>
        <Text
          style={[styles.city, styles.rComponent]}
        >{`Faisalabad  `}</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("./component/dot.png")}
        />
        <Text style={[styles.vehicleNum, styles.rComponent]}>SH13322</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("./component/dot.png")}
        />
        <Text style={[styles.Registration, styles.rComponent]}>R-532</Text>
      </View>
      <Text style={[styles.truckType, styles.rComponent]}>Box Truck</Text>
      <Image
        style={[
          styles.heart,
          styles.heartLayout,
        ]}
        contentFit="cover"
        source={require("../../../assets/Collapsable51.png")}
      />
      <View style={styles.component1}>
        <View style={[styles.component1Child, styles.component1Position]} />
        <View style={[styles.component1Item, styles.component1Position]} />
        <Text style={[styles.rating, styles.text1Typo]}>Rating</Text>
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.text1Typo}>7.3</Text>
          <Text style={styles.RegistraionTypo}>/10</Text>
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.description, styles.descriptionTypo]}>
          Description
        </Text>
        <Text style={[styles.description1, styles.descriptionTypo]}>
        Rectangular cargo area, varying dimensions, commonly transports diverse goods.
        </Text>
      </View>
      <View style={[styles.onboardingMessagesParent, styles.onboardingLayout]}>
      <Image
          style={[styles.onboardingMessages, styles.buttonsFlexBox]}
          contentFit="cover"
          source={require(".../../../assets/rectangle1.png")}
        />

        
        <Text
          style={[styles.tenantDriver, styles.text1Typo]}
        >{`Tenant & Driver Information`}</Text>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Book Truck</Text>
        </View>
      </View>
      <Image
        style={[styles.image15Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/driverImage1.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/driverImage.png")}
      />
      <View style={[styles.tenantInfo, styles.infoPosition]}>
        <View style={styles.infoChildShadowBox} />
        <Text style={styles.davidWill}>David Will</Text>
      </View>
      <View style={[styles.driverInfo, styles.infoPosition]}>
        <View style={styles.infoChildShadowBox} />
        <Text style={styles.davidWill}>Will bravo</Text>
      </View>
      <Pressable style={styles.button} onPress={handleSearchByVehicle}>
      <View>
      <Image
        style={styles.swapIcon}
        contentFit="cover"
        source={require("../../../assets/swap icon.png")}
      />
      </View>
      </Pressable>
      <Image
        style={styles.verificationIcon}
        contentFit="cover"
        source={require("../../../assets/attributeicon2.png")}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  component1ItemPosition: {
    borderBottomRightRadius: 13,
    borderTopRightRadius: 13,
  },
  topBarLayout: {
    height: 44,
    left: 0,
  },
  basePosition: {
    height: 43,
    left: 0,
    position: "absolute",
  },
  keyFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  louTypo: {
    fontWeight: "700",
  },
  titleTypo: {
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    height: 32,
    width: 32,
    top: 1,
    left: 16,
    position: "absolute",
  },
  heartlayout: {
    position: "absolute",
    overflow: "hidden",
  },
  rComponent: {
    textAlign: "left",
    color: theme.palette.dashboard.black,
    position: "absolute",
  },
  groupLayout: {
    bottom: "20%",
    top: height * 0.01,
    width: width * 0.01,
    height: height * 0.003,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1Position: {
    width: width * 0.13,
    height: height * 0.035,
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
  },
  textTypo: {
    fontSize: 12,
    top: "21.43%",
    width: "45.16%",
    height: "46.43%",
    textAlign: "left",
    color: theme.palette.primary.mainwhite,
    position: "absolute",
  },
  descriptionTypo: {
    letterSpacing: 1,
    fontSize: 14,
    textAlign: "left",
    position: "absolute",
  },
  onboardingLayout: {
    height: height * 1,
    width: width,
    position: "absolute",
  },
  buttonsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  slidersPosition: {
    backgroundColor: theme.palette.dashboard.lightgray,
    bottom: "36.36%",
    top: "36.36%",
    height: "27.27%",
    borderRadius: 12,
    width: "15%",
    position: "absolute",
  },
  buttonhalffillLayout: {
    width: 207,
    flexDirection: "row",
  },
  loginTypo: {
    fontWeight: "600",
    textAlign: "center",
  },
  iconLayout: {
    height: height * 0.17,
    width: width * 0.32,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    top: height * 0.62,
    position: "absolute",
  },
  infoPosition: {
    top: height * 0.75,
    width: 125,
    height: 32,
    position: "absolute",
  },
  attributeBasedBookingSearchChild: {
    top: 81,
    backgroundColor: theme.palette.dashboard.darkgray,
    height: 1,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vehicleImage: {
    height: height * 0.36,
    top: height * -0.08,
    width: width ,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 19,
    right: 20,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 14,
    width: 54,
    height: 21,
    left: 16,
    position: "absolute",
  },
  topBar: {
    top: 1,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  base: {
    backgroundColor: theme.palette.dashboard.darkgray,
    opacity: 0,
    top: 0,
    width: 375,
  },
  lou: {
    color: theme.palette.dashboard.lightgray,
  },
  bank: {
    color: theme.palette.dashboard.darkgray,
    fontWeight: "300",
  },
  key: {
    letterSpacing: 0.7,
    fontSize: 12,
    textAlign: "center",
    height: 22,
    width: 79,
    top: 0,
    left: 0,
  },
  logoChild: {
    left: 48,
    width: 25,
    height: 2,
    top: 0,
    position: "absolute",
  },
  logo: {
    left: 149,
    height: 22,
    width: 79,
    top: 11,
    display: "none",
    position: "absolute",
  },
  title: {
    left: 103,
    lineHeight: 20,
    color: theme.palette.dashboard.mainblue,
    width: 167,
    height: 19,
    fontSize: 12,
    top: 11,
  },
  iconAvatar: {
    display: "none",
  },
  baseIcon: {
    right: "0%",
    borderRadius: 12,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.alreadyAccount.textColor,
  },
  arrowsChevronLeft: {
    height: "62.5%",
    width: "62.5%",
    top: "18.75%",
    right: "18.75%",
    bottom: "18.75%",
    left: "18.75%",
  },
  leftSideIcons: {
    width: 64,
    top: 0,
    overflow: "hidden",
  },
  navField: {
    top: 38,
    width: 375,
  },
  RectangleChild: {
    borderRadius: 12,
    backgroundColor: "#d2d2d2",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 78,
    width: 337,
    top: 0,
    left: 0,
    position: "absolute",
  },
  Rectangle: {
    top: height * 0.22,
    left: width * 0.05,
    height: height * 0.1,
    width: width * 0.1,
    position: "absolute",
  },
  city: {
    width: width,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "left",
    top: 0,
    height: height,
    left: 0,
  },
  groupChild: {
    left: width * 0.42,
  },
  vehicleNum: {
    width: width,
    left: width * 0.24,
    fontWeight: "600",
    fontSize: 15,
    textAlign: "left",
    top: 0,
    height: height,
  },
  groupItem: {
    left: "40.98%",
  },
  Registration: {
    width: width * 0.2,
    left: width * 0.44,
    fontWeight: "600",
    fontSize: 15,
    textAlign: "left",
    top: 0,
    height: height,
  },
  cityParent: {
    height: height,
    width: width * 0.55,
    top: height * 0.274,
    right: 0,
    bottom: 0,
    left: width * 0.124,
    position: "absolute",
  },
  truckType: {
    height: height,
    width: width,
    top: height * 0.24,
    left: width * 0.12,
    textAlign: "left",
    fontWeight: "700",
    fontSize: 18,
  },
  heart: {
    height: height * 0.04,
    width: width * 0.08,
    top: height * 0.23,
    left: width * 0.82,
  },
  component1Child: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: theme.palette.dashboard.mainblue,
    left: "0%",
  },
  component1Item: {
    left: width * 0.13,
    backgroundColor: theme.palette.dashboard.darkestgray,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
  },
  rating: {
    left: width * 0.02,
    fontSize: 12,
    top: height * 0.007,
    width: width * 0.1,
    height: height * 0.1,
    textAlign: "left",
    color: theme.palette.primary.mainwhite,
    position: "absolute",
  },
RegistrationTypo: {
    fontWeight: "300",
  },
  text: {
    left: width * 0.15,
  },
  component1: {
    top: height * 0.3,
    left: width * 0.68,
    width: width * 0.25,
    height: height * 0.036,
    position: "absolute",
  },
  description: {
    left: 1,
    width: 124,
    height: 15,
    color: theme.palette.dashboard.black,
    fontWeight: "800",
    letterSpacing: 1,
    top: 0,
  },
  description1: {
    top: height * 0.03,
    color: "rgba(0, 0, 0, 0.78)",
    width: width * 0.86,
    height: height * 0.1,
    left: 0,
  },
  view: {
    top: height * 0.34,
    height: height * 0.1,
    width: width * 0.1,
    left: width * 0.08,
    position: "absolute",
  },
  getAnOverview: {
    lineHeight: 21,
    color: "rgba(255, 255, 255, 0.8)",
    width: 287,
    fontSize: 12,
    top: 0,
    left: 0,
  },
  youOughtTo: {
    top: -59,
    fontSize: 12,
    letterSpacing: 0,
    width: 287,
    color: theme.palette.dashboard.darkgray,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    display: "none",
    left: 0,
  },
  text3: {
    height: 63,
    width: 287,
  },
  slidersChild: {
    right: "55%",
    left: "30%",
  },
  slidersItem: {
    right: "30%",
    left: "55%",
  },
  slidersInner: {
    height: "81.82%",
    top: "9.09%",
    right: "80%",
    bottom: "9.09%",
    left: "5%",
    borderRadius: 12,
    width: "15%",
    position: "absolute",
    backgroundColor: theme.palette.dashboard.darkgray,
  },
  rectangleView: {
    display: "none",
  },
  sliders: {
    width: 40,
    height: 22,
  },
  button: {
    fontSize: 12,
    color: theme.palette.dashboard.mainblue,
  },
  buttonhalffill1: {
    borderRadius: 12,
    backgroundColor: "#71c4ef",
    height: 62,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonhalffill: {
    shadowColor: "rgba(44, 20, 221, 0.15)",
    marginTop: 32,
    flexDirection: "row",
    elevation: 24,
    shadowRadius: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  slidersParent: {
    marginTop: 24,
    alignItems: "center",
  },
  textParent: {
    display: "none",
  },
  onboardingMessages: {
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    paddingHorizontal:12,
    paddingVertical: 12,
    backgroundColor: "transparent",
    elevation: 24,
    shadowRadius: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: width * 0,
      height: height * 0.4,
    },
    height: height * 0.76,
    width: width * 1,
    position: "absolute",
  },
  groupInner: {
    top: height * 0.1,
    left: 171,
    width: 35,
    height: 5,
    position: "absolute",
  },
  tenantDriver: {
    height: height * 0.1,
    width: width * 0.7,
    top: height * 0.13,
    left: width * 0.16,
    fontSize: 18,
    color: theme.palette.dashboard.darkgray,
    textAlign: "center",
    position: "absolute",
  },
  login: {
    fontSize: 12,
    color: theme.palette.dashboard.black,
  },
  buttons: {
    top: 290,
    left: 44,
    borderRadius: 12,
    width: 282,
    height: 46,
    padding: 12,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: theme.palette.primary.mainwhite,
    justifyContent: "center",
  },
  onboardingMessagesParent: {
    top: height * 0.45,
  },
  image15Icon: {
    left: 218,
  },
  image13Icon: {
    left: 31,
  },
  infoChildShadowBox: {
    backgroundColor: theme.palette.dashboard.darkgray,
    width: 125,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 32,
    top: 0,
    left: 0,
    position: "absolute",
  },
  davidWill: {
    top: 6,
    left: 30,
    fontSize: 12,
    width: 82,
    height: 14,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "left",
    color: theme.palette.alreadyAccount.textColor,
    position: "absolute",
  },
  tenantInfo: {
    left: width * 0.08,
  },
  driverInfo: {
    left: width * 0.58,
  },
  swapIcon: {
    top:height * 0.77,
    left: 51,
    width: 278,
    height: 40,
    position: "absolute",
  },
  verificationIcon: {
    top: height * 0.48,
    left: width * 0.4,
    width: width * 0.2,
    height: height * 0.09,
    position: "absolute",
  },
  attributeBasedBookingSearch: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: theme.palette.dashboard.darkgray,
  },
});

export default AttributeBasedBookingSearch1;
