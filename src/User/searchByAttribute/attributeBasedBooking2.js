import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import theme from '../../../theme';

const AttributeBasedBookingSearch1 = () => {
  return (
    <View style={styles.attributeBasedBookingSearch}>
      <View
        style={[
          styles.attributeBasedBookingSearchChild,
          styles.component1ItemPosition,
        ]}
      />
      <Image
        style={styles.card7Icon}
        contentFit="cover"
        source={require("../../../assets/card7.png")}
      />
      <View style={[styles.navField, styles.basePosition]}>
        <View style={[styles.base, styles.basePosition]} />
        <View style={styles.logo}>
          <Text style={[styles.key, styles.keyFlexBox]}>
            <Text style={[styles.lou, styles.louTypo]}>Lou</Text>
            <Text style={styles.bank}>Bank</Text>
          </Text>
        </View>
        <Text style={[styles.title, styles.titleTypo]}>Booking</Text>
        <View style={[styles.leftSideIcons, styles.basePosition]}>
          <View style={[styles.iconAvatar, styles.iconPosition]} />
          <View style={styles.iconPosition}>
            <View style={styles.baseIcon} />
            <Image
              style={[styles.arrowsChevronLeft, styles.arrowsChevronLeftLayout]}
              contentFit="cover"
              source={require(".../../../assets/back.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.bestVehicleText}>
        <View style={styles.bestVehicleTextChild} />
      </View>
      <View style={styles.faisalabadParent}>
        <Text
          style={[styles.faisalabad, styles.r532FlexBox]}
        >{`Faisalabad  `}</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("./component/dot.png")}
        />
        <Text style={[styles.sh13322, styles.r532FlexBox]}>SH13322</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("./component/dot.png")}
        />
        <Text style={[styles.r532, styles.r532FlexBox]}>R-532</Text>
      </View>
      <Text style={[styles.boxTruck, styles.r532FlexBox]}>Box Truck</Text>
      <Image
        style={[
          styles.adminSidebarcollapsable51,
          styles.arrowsChevronLeftLayout,
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
          <Text style={styles.r532Typo}>/10</Text>
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.description, styles.descriptionTypo]}>
          Description
        </Text>
        <Text style={[styles.estAspernaturNostrum, styles.descriptionTypo]}>
          Est aspernatur nostrum et molestias perspiciatis eum vitae quia non
          quod iste ex cumque doloribus aut repellat
        </Text>
      </View>
      <View style={[styles.onboardingMessagesParent, styles.onboardingLayout]}>
      <Image
          style={[styles.onboardingMessages, styles.buttonsFlexBox]}
          contentFit="cover"
          source={require(".../../../assets/rectangle1.png")}
        />

          <View style={[styles.textParent, styles.buttonsFlexBox]}>
            <View style={styles.text3}>
              <Text style={[styles.getAnOverview, styles.titleTypo]}>
                Effortlessly book relaible mini trucks for all your logistics
                needs with our user-friendly app
              </Text>
              <Text style={[styles.youOughtTo, styles.buttonsFlexBox]}>
                Welcome to SHIPEASE
              </Text>
            </View>
            <View style={styles.slidersParent}>
              <View style={styles.sliders}>
                <View style={[styles.slidersChild, styles.slidersPosition]} />
                <View style={[styles.slidersItem, styles.slidersPosition]} />
                <View style={styles.slidersInner} />
                <View style={[styles.rectangleView, styles.slidersPosition]} />
              </View>
              <View
                style={[styles.buttonhalffill, styles.buttonhalffillLayout]}
              >
                <View
                  style={[styles.buttonhalffill1, styles.buttonhalffillLayout]}
                >
                  <Text style={[styles.button, styles.loginTypo]}>Next</Text>
                </View>
              </View>
            </View>
          </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require(".../../../assets/Rectangle 16875.png")}
        />
        <Text
          style={[styles.tenantDriver, styles.text1Typo]}
        >{`Tenant & Driver Information`}</Text>
        <Pressable onPress={''}>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Book Truck</Text>
        </View>
        </Pressable>
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
      <Image
        style={styles.swapIcon}
        contentFit="cover"
        source={require("../../../assets/swap icon.png")}
      />
      <Image
        style={styles.verificationIcon}
        contentFit="cover"
        source={require("../../../assets/attributeicon2.png")}
      />
    </View>
  );
};

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
    top: 4,
    left: 16,
    position: "absolute",
  },
  arrowsChevronLeftLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  r532FlexBox: {
    textAlign: "left",
    color: theme.palette.dashboard.black,
    position: "absolute",
  },
  groupLayout: {
    bottom: "20%",
    top: "66.88%",
    width: "1.09%",
    height: "13.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1Position: {
    width: "46.24%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    color: theme.palette.dashboard.black,
    position: "absolute",
  },
  descriptionTypo: {
    letterSpacing: 1,
    fontSize: 12,
    textAlign: "left",
    position: "absolute",
  },
  onboardingLayout: {
    height: 672,
    width: 377,
    left: 0,
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
    height: 157,
    width: 125,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    top: 579,
    position: "absolute",
  },
  infoPosition: {
    top: 704,
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
  card7Icon: {
    height: 321,
    top: 0,
    width: 375,
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
  bestVehicleTextChild: {
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
  bestVehicleText: {
    top: 263,
    left: 18,
    height: 78,
    width: 337,
    position: "absolute",
  },
  faisalabad: {
    width: "43.17%",
    fontWeight: "300",
    fontSize: 14,
    textAlign: "left",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  groupChild: {
    right: "24.59%",
    left: "77.32%",
  },
  sh13322: {
    width: "30.05%",
    left: "44.26%",
    fontWeight: "300",
    fontSize: 14,
    textAlign: "left",
    top: "0%",
    height: "100%",
  },
  groupItem: {
    right: "57.92%",
    left: "40.98%",
  },
  r532: {
    width: "22.4%",
    left: "77.6%",
    fontWeight: "300",
    fontSize: 12,
    textAlign: "left",
    top: "0%",
    height: "100%",
  },
  faisalabadParent: {
    height: "1.97%",
    width: "48.8%",
    top: "37.56%",
    right: "42.67%",
    bottom: "60.47%",
    left: "8.53%",
    position: "absolute",
  },
  boxTruck: {
    height: "3.33%",
    width: "40%",
    top: "34.24%",
    left: "8.53%",
    textAlign: "left",
    fontWeight: "700",
    fontSize: 18,
  },
  adminSidebarcollapsable51: {
    height: "3.82%",
    width: "7.73%",
    top: "33.74%",
    right: "10.93%",
    bottom: "62.44%",
    left: "81.33%",
  },
  component1Child: {
    right: "53.76%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: theme.palette.dashboard.mainblue,
    left: "0%",
  },
  component1Item: {
    right: "7.53%",
    left: "46.24%",
    backgroundColor: theme.palette.dashboard.darkgray,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  rating: {
    left: "4.3%",
    fontSize: 12,
    top: "21.43%",
    width: "45.16%",
    height: "46.43%",
    textAlign: "left",
    color: theme.palette.dashboard.darkgray,
    position: "absolute",
  },
  r532Typo: {
    fontWeight: "300",
  },
  text: {
    left: "54.84%",
  },
  component1: {
    top: 327,
    left: 245,
    width: 93,
    height: 28,
    position: "absolute",
  },
  description: {
    left: 1,
    width: 124,
    height: 15,
    color: theme.palette.dashboard.black,
    fontWeight: "500",
    letterSpacing: 1,
    top: 0,
  },
  estAspernaturNostrum: {
    top: 24,
    color: "rgba(0, 0, 0, 0.78)",
    width: 314,
    height: 44,
    left: 0,
  },
  view: {
    top: 374,
    height: 68,
    width: 314,
    left: 31,
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
    right: "5%",
    left: "80%",
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
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    paddingHorizontal:12,
    paddingVertical: 12,
    backgroundColor: "transparent",
    elevation: 24,
    shadowRadius: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 672,
    width: 377,
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupInner: {
    top: 9,
    left: 171,
    width: 35,
    height: 5,
    position: "absolute",
  },
  tenantDriver: {
    height: "4.17%",
    width: "61.8%",
    top: "13.39%",
    left: "19.1%",
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
    backgroundColor: theme.palette.dashboard.darkgray,
    justifyContent: "center",
  },
  onboardingMessagesParent: {
    top: 461,
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
    left: 31,
  },
  driverInfo: {
    left: 218,
  },
  swapIcon: {
    top: 754,
    left: 51,
    width: 278,
    height: 40,
    position: "absolute",
  },
  verificationIcon: {
    top: 470,
    left: 140,
    width: 93,
    height: 94,
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
