import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import theme from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const AttributeBasedBooking4 = () => {
    const navigation = useNavigation();
  

    const handleSearchByVehicle = () => {
      navigation.navigate('Dasboard');
    };
  return (
    <View style={styles.attributeBasedBookingSearch}>
      <View style={styles.otpMain}>
        <Text style={[styles.bookingSuccessful, styles.titleTypo]}>
          Booking Successful
        </Text>
        <Text
          style={[styles.yourBookingIs, styles.loginTypo1]}
        >{`Your Booking is Successful
Please Confirm your Pick up
& drop confirmation `}</Text>
        <Image
          style={[styles.verificationIcon, styles.logoChildPosition]}
          contentFit="cover"
          source={require("../../User/assests/final.png")}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.event}>
          <View style={styles.list}>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={[styles.calendar, styles.itemFlexBox]}>
                <Text style={styles.label}>Enter Pickup location</Text>
              </View>
              <View style={styles.input}>
                <View style={styles.basePosition}>
                  <View style={[styles.base1, styles.basePosition]} />
                </View>
                <Text style={[styles.faisalabad, styles.loginTypo]}>
                  Faisalabad
                </Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={[styles.calendar, styles.itemFlexBox]}>
                <Text style={styles.label}>Enter Drop off location</Text>
              </View>
              <View style={styles.input1}>
                <Text style={[styles.lahore, styles.pmLayout]}>Lahore</Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={[styles.calendar, styles.itemFlexBox]}>
                <Text style={styles.label}>Dates</Text>
              </View>
              <View style={styles.input1}>
                <Text style={[styles.wed27Nov, styles.pmTypo]}>
                  Wed, 27 Nov 2023
                </Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={[styles.calendar, styles.itemFlexBox]}>
                <Text style={styles.label}>Time</Text>
              </View>
              <View style={styles.input1}>
                <Text style={[styles.pm, styles.pmTypo]}>9:00 PM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.price}>
          <View style={styles.list}>
            <View style={[styles.item, styles.itemFlexBox]}>
              <Text style={[styles.label4, styles.labelLayout]}>
                Total price
              </Text>
              <Text style={[styles.label5, styles.labelLayout]}>$64.50</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable onPress={handleSearchByVehicle}>
      <View style={[styles.buttons, styles.itemFlexBox]}>
        <Text style={[styles.login, styles.loginTypo]}>Back to home</Text>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarLayout: {
    height: 44,
    left: 0,
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  logoChildPosition: {
    top: 0,
    position: "absolute",
  },
  titleTypo: {
    color: theme.palette.dashboard.mainblue,
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
  baseIconPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  topBarLayout1: {
    width: 375,
    position: "absolute",
  },
  loginTypo1: {
    fontSize: 14,
    textAlign: "center",
  },
  itemFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  basePosition: {
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  loginTypo: {
    fontWeight: "600",
  },
  pmLayout: {
    width: 97,
    left: 20,
  },
  pmTypo: {
    fontWeight: "600",
  },
  labelLayout: {
    lineHeight: 18,
    color: theme.palette.dashboard.black,
    fontSize: 14,
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
    height: 11,
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
  lou: {
    color: theme.palette.dashboard.darkgray,
    fontWeight: "700",
  },
  bank: {
    fontWeight: "300",
    color: theme.palette.primary.mainwhite,
  },
  key: {
    fontSize: 14,
    letterSpacing: 0.7,
    textAlign: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  logoChild: {
    left: 48,
    width: 25,
    height: 2,
  },
  logo: {
    top: 11,
    left: 149,
    width: 79,
    height: 22,
    display: "none",
    position: "absolute",
  },
  title: {
    top: 10,
    left: 144,
    fontSize: 14,
    lineHeight: 20,
  },
  iconAvatar: {
    display: "none",
  },
  baseIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: 7,
    backgroundColor: theme.palette.primary.mainwhite,
    left: "0%",
  },
  arrowsChevronLeft: {
    height: "62.5%",
    width: "62.5%",
    top: "18.75%",
    right: "18.75%",
    bottom: "18.75%",
    left: "18.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leftSideIcons: {
    width: 64,
    height: 44,
    left: 0,
    overflow: "hidden",
  },
  navField: {
    width: 232,
    top: 38,
    position: "absolute",
  },
  attributeBasedBookingSearchChild: {
    top: 3,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor:theme.palette.dashboard.darkgray,
    height: 1,
    left: 0,
  },
  bookingSuccessful: {
    top: "62.83%",
    left: "11.06%",
    fontSize: 20,
  },
  yourBookingIs: {
    top: "77.43%",
    color: "#76787e",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  verificationIcon: {
    left: 67,
    width: 105,
    height: 108,
  },
  otpMain: {
    height: "27.83%",
    width: "62.67%",
    top: "5.63%",
    right: "19.2%",
    bottom: "47.54%",
    left: "18.13%",
    position: "absolute",
  },
  label: {
    lineHeight: 25,
    textAlign: "left",
    color: theme.palette.dashboard.black,
    fontSize:12, 
  },
  calendar: {
    alignItems: "center",
  },
  faisalabad: {
    top: 39,
    width: 98,
    height: 17,
    textAlign: "right",
    letterSpacing: 1.2,
    fontSize: 12,
    fontWeight: "600",
    color: theme.palette.dashboard.black,
    position: "absolute",
    left: 20,
  },
  input: {
    width: 118,
    height: 89,
  },
  item: {
    height: 36,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 7,
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    top: 20,
    right: 16,
    height: 24,
    display: "none",
  },
  lahore: {
    height: 20,
    textAlign: "right",
    fontWeight: "600",
    letterSpacing: 1.2,
    fontSize: 12,
    color: theme.palette.dashboard.black,
    position: "absolute",
    top: 38,
  },
  input1: {
    width: 117,
    height: 89,
  },
  wed27Nov: {
    top: 36,
    height: 19,
    lineHeight: 16,
    textAlign: "right",
    fontSize: 12,
    color: theme.palette.dashboard.black,
    position: "absolute",
    width: 117,
    left: 0,
  },
  pm: {
    top: 34,
    lineHeight: 16,
    textAlign: "right",
    fontSize: 12,
    color: theme.palette.dashboard.black,
    position: "absolute",
    width: 97,
    left: 20,
    height: 24,
  },
  list: {
    alignSelf: "stretch",
  },
  event: {
    height: 144,
    alignSelf: "stretch",
  },
  divider: {
    borderStyle: "dashed",
    borderColor:  theme.palette.dashboard.darkgray,
    borderRadius: 0.001,
    borderTopWidth: 1,
    marginTop: 12,
    alignSelf: "stretch",
    height: 1,
  },
  label4: {
    fontWeight: "600",
    textAlign: "left",
  },
  label5: {
    display: "flex",
    width: 94,
    textAlign: "right",
    alignItems: "center",
    fontWeight: "700",
  },
  price: {
    width: 295,
    marginTop: 12,
  },
  details: {
    marginLeft: -165.5,
    top: 300,
    left: "50%",
    borderRadius: 7,
    width: 327,
    paddingHorizontal: 7,
    paddingTop:7,
    paddingBottom: 7,
    position: "absolute",
  },
  login: {
    fontSize: 12,
    textAlign: "center",
    color: theme.palette.primary.mainwhite,
  },
  buttons: {
    top: 568,
    left: 55,
    borderRadius: 7,
    backgroundColor: theme.palette.dashboard.lightblue,
    width: 252,
    height: 46,
    justifyContent: "center",
    padding: 7,
    alignItems: "center",
    position: "absolute",
  },
  attributeBasedBookingSearch: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: theme.palette.primary.mainwhite,
  },
});

export default AttributeBasedBooking4;
