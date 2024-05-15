import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import theme from '../../../theme';
import Services from '../dashboard/components/services';
import { useNavigation } from '@react-navigation/native';

const DirectTenantBooking = () => {
    const navigation = useNavigation();
  

    const handleSearchByVehicle = () => {
      navigation.navigate('AttributebasedBooking2');
    };
  return (
    <View style={styles.directTenantBooking1}>
      <View style={[styles.directTenantBooking1Item, styles.directLayout]} />
      <View style={[styles.tenantCard, styles.tenantCardLayout]}>
      <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("./component/main12.png")}
        />
        <Text style={[styles.onFirstBooking, styles.offClr]}>
          On First Booking Services
        </Text>
        <Image
          style={[styles.pngwing1Icon, styles.tenantCardLayout]}
          contentFit="cover"
          source={require("./component/dis.png")}
        />
        <View style={[styles.tenantCardInner, styles.offLayout]}>
          <View style={[styles.groupWrapper, styles.offLayout]}>
            <View style={[styles.groupWrapper, styles.offLayout]}>
              <Text style={[styles.off, styles.offTypo]}>10% OFF</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={[styles.createAccount, styles.createTypo]}>
            Book Now
          </Text>
        </View>
      </View>
      <View style={styles.event}>
        <View style={styles.list}>
          <View style={styles.itemFlexBox}>
            <View style={styles.calendar}>
              <Text style={styles.label}>Name</Text>
            </View>
            <View style={styles.input}>
              <View style={styles.basePosition}>
                <View style={[styles.base2, styles.basePosition]} />
              </View>
              <Text style={[styles.mMuntazerMehdi, styles.textTypo]}>
                M. Muntazer Mehdi
              </Text>
            </View>
          </View>
          <View style={[styles.item1, styles.itemFlexBox]}>
            <View style={styles.calendar}>
              <Text style={styles.label}>CNIC</Text>
            </View>
            <View style={styles.input1}>
              <Text style={[styles.text, styles.textTypo]}>
                33302-8535-1821
              </Text>
            </View>
          </View>
          <View style={[styles.item1, styles.itemFlexBox]}>
            <View style={styles.calendar}>
              <Text style={styles.label}>Phone No.</Text>
            </View>
            <View style={styles.input1}>
              <Text style={[styles.text1, styles.text1Typo]}>0312-7625971</Text>
            </View>
          </View>
          <View style={[styles.item1, styles.itemFlexBox]}>
            <View style={styles.calendar}>
              <Text style={styles.label}>Email</Text>
            </View>
            <View style={styles.input1}>
              <Text style={[styles.muntazer12gmailcom, styles.text1Typo]}>
                muntazer12@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bestVehicle}>
        <Text style={[styles.seeAll, styles.offTypo]}>Vehicles</Text>
        <Text style={[styles.seeAll1, styles.seeAll1Typo]}>See All</Text>
      </View>

      <Pressable onPress={handleSearchByVehicle}>
      <View style={[styles.vehicleCard, styles.vehicleCardLayout]}>
        <View style={[styles.vehicleCardChild, styles.vehicleCardShadowBox]} />
        <Image
          style={styles.istockphoto1403174172612x612Icon}
          contentFit="cover"
          source={require("./component/truck1.png")}
        />
        <View style={styles.bestVehicleText}>
          <View style={[styles.jamboTruckWrapper, styles.baseIconPosition]}>
            <Text style={styles.jamboTruck}>Jambo Truck</Text>
          </View>
        </View>
        <View style={styles.lahoreParent}>
          <Text style={styles.lahore}>Lahore</Text>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("./component/dot.png")}
          />
          <Text style={[styles.sdh5318, styles.r421Typo]}>SDH5318</Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("./component/dot.png")}
          />
          <Text style={[styles.r421, styles.r421Typo]}>R-421</Text>
        </View>
      </View>
      </Pressable>

      <Pressable onPress={handleSearchByVehicle}>
      <View style={[styles.vehicleCard1, styles.vehicleCardLayout]}>
        <View style={[styles.vehicleCardItem, styles.vehicleCardShadowBox]} />
        <Image
          style={styles.istockphoto1403174172612x612Icon}
          contentFit="cover"
          source={require("./component/truck1.png")}
        />
        <View style={styles.bestVehicleText}>
          <View style={[styles.jamboTruckWrapper, styles.baseIconPosition]}>
            <Text style={styles.jamboTruck}>Jambo Truck</Text>
          </View>
        </View>
        <View style={styles.lahoreParent}>
          <Text style={styles.lahore}>Lahore</Text>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("./component/dot.png")}
          />
          <Text style={[styles.sdh5318, styles.r421Typo]}>SDH5318</Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("./component/dot.png")}
          />
          <Text style={[styles.r421, styles.r421Typo]}>R-421</Text>
        </View>
      </View>
      </Pressable>


      <View style={[styles.services]}>
        <Services/>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.login}>Chat With Tenant</Text>
      </View>
      <Image
        style={[styles.adminSidebarcollapsable26, styles.iconLayout]}
        contentFit="cover"
        source={require("./component/but1.png")}
      />
      <Text style={styles.weWillDeliver} numberOfLines={2}>
        We Will Deliver Your {"\n"}Packages Anywhere!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  directLayout: {
    height: 1,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  qrCode11Layout: {
    width: 54,
    position: "absolute",
  },
  navFieldPosition: {
    height: 43,
    left: 0,
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
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  tenantCardLayout: {
    height: 147,
    position: "absolute",
  },
  offClr: {
    color: theme.palette.alreadyAccount.textColor,
    letterSpacing: 1,
  },
  offLayout: {
    height: 26,
    width: 122,
  },
  offTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  createTypo: {

    color: theme.palette.alreadyAccount.textColor,
    fontWeight: "500",
    textAlign: "center",
  },
  basePosition: {
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    letterSpacing: 1.2,
    fontWeight: "600",
    color: theme.palette.dashboard.black,
    fontSize: 12,
    position: "absolute",
  },
  itemFlexBox: {
    paddingVertical: 7,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    height: 36,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "right",
    fontWeight: "600",
    color: theme.palette.dashboard.black,
    lineHeight: 16,
    fontSize: 12,
    position: "absolute",
  },
  seeAll1Typo: {
    color: theme.palette.dashboard.mainblue,
    fontWeight: "600",
    position: "absolute",
  },
  vehicleCardLayout: {
    height: 214,
    width: 215,
    top: 340,
    position: "absolute",
  },
  vehicleCardShadowBox: {
    height: 158,
    width: 164,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 56,
    borderRadius: 7,
    position: "absolute",
    color: theme.palette.dashboard.black,
  },
  groupLayout: {
    width: 2,
    bottom: "46.67%",
    top: "40%",
    height: "13.33%",
    maxHeight: "100%",
    position: "absolute",
  },
  r421Typo: {
    width: 41,
    color: theme.palette.dashboard.black,
    textAlign: "left",
    fontSize: 12,
    top: "0%",
    height: "100%",
    fontWeight: "300",
    position: "absolute",
  },
  servicesCardPosition: {
    height: 79,
    width: 85,
    top: 656,
    left: "50%",
    position: "absolute",
  },
  directTenantBooking1Child: {
    top: 21,
    backgroundColor: theme.palette.dashboard.darkestgray,
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
    height: 21,
    left: 16,
    width: 54,
  },
  topBar: {
    top: 1,
    height: 44,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",

    color: theme.palette.alreadyAccount.textColor,
  },
  lou: {
    fontWeight: "700",
  },
  bank: {
    fontWeight: "300",
  },
  key: {
    fontSize: 12,
    letterSpacing: 0.7,
    textAlign: "center",
    color: theme.palette.dashboard.mainblue,
    height: 22,
    width: 79,
    top: 0,
    left: 0,
    position: "absolute",
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
    width: 167,
    height: 19,
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    color: theme.palette.dashboard.mainblue,
    top: 11,
    position: "absolute",
  },
  iconAvatar: {
    display: "none",
  },
  baseIcon: {
    borderRadius: 7,
    backgroundColor:theme.palette.dashboard.black,
    left: "0%",
    top: "0%",
    height: "100%",
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
    top: 0,
    overflow: "hidden",
  },
  base: {
    opacity: 0,
    backgroundColor: theme.palette.dashboard.mainblue,
    height: 43,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  navField: {
    top: 38,
    width: 375,
  },
  directTenantBooking1Item: {
    top: 80,

    color: theme.palette.alreadyAccount.textColor,
  },
  image13Icon: {
    top: 24,
    borderRadius: 7,
    height: 123,
    width: 332,
    left: 0,
    position: "absolute",
  },
  onFirstBooking: {
    top: 67,
    left: 23,
    width: 170,
    height: 14,
    textAlign: "left",
    fontSize: 12,
    letterSpacing: 1,
    position: "absolute",
  },
  pngwing1Icon: {
    left: 213,
    width: 110,
    top: 0,
  },
  off: {
    fontSize: 18,
    height: 26,
    width: 122,

    color: theme.palette.alreadyAccount.textColor,
    letterSpacing: 1,
    top: 0,
    left: 0,
  },
  groupWrapper: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  tenantCardInner: {
    top: 31,
    left: 20,
    position: "absolute",
  },
  createAccount: {
    lineHeight: 16,
    fontSize: 12,
  },
  button: {
    marginLeft: -146,
    top: 97,
    backgroundColor: theme.palette.dashboard.mainblue,
    width: 78,
    height: 34,
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 7,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tenantCard: {
    top: 75,
    left: 21,
    width: 332,
  },
  label: {
    lineHeight: 25,
    color: theme.palette.dashboard.black,
    fontSize: 12,
    textAlign: "left",
  },
  calendar: {
    alignItems: "center",
    flexDirection: "row",
  },
  mMuntazerMehdi: {
    top: 39,
    left: -24,
    width: 142,
    height: 17,
  },
  input: {
    width: 118,
    height: 89,
  },
  icon: {
    top: 20,
    right: 16,
    height: 24,
    display: "none",
  },
  text: {
    left: -17,
    width: 134,
    height: 20,
    top: 38,
  },
  input1: {
    width: 117,
    height: 89,
  },
  item1: {
    marginTop: -5,
  },
  text1: {
    top: 36,
    width: 117,
    height: 19,
    left: 0,
  },
  muntazer12gmailcom: {
    top: 34,
    left: -22,
    width: 139,
    height: 24,
  },
  list: {
    alignSelf: "stretch",
  },
  event: {
    top: 230,
    left: 25,
    width: 322,
    height: 144,
    position: "absolute",
  },
  seeAll: {
    width: "65.45%",
    color: theme.palette.dashboard.black,
    left: "0%",
    top: "-80%",
    height: "100%",
    fontSize: 16,
  },
  seeAll1: {
    height: "72%",
    width: "29.32%",
    top: "-80%",
    left: "65.68%",
    fontSize:16,
    textAlign: "left",
  },
  bestVehicle: {
    height: "3.08%",
    width: "101.87%",
    top: "53.45%",
    right: "-7.73%",
    bottom: "43.47%",
    left: "5.87%",
    position: "absolute",
  },
  vehicleCardChild: {
    left: 50,
  },
  istockphoto1403174172612x612Icon: {
    left: 31,
    width: 184,
    height: 166,
    top: 0,
    position: "absolute",
  },
  jamboTruck: {
    color: theme.palette.dashboard.black,
    fontSize: 12,
    left: "0%",
    top: "0%",
    height: "100%",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  jamboTruckWrapper: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  bestVehicleText: {
    height: "16.12%",
    width: "87.86%",
    top: "77.1%",
    right: "12.14%",
    bottom: "6.78%",
    left: "0%",
    position: "absolute",
  },
  lahore: {
    width: 66,
    color: theme.palette.dashboard.black,
    textAlign: "left",
    fontSize: 12,
    top: "0%",
    height: "100%",
    fontWeight: "300",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 87,
  },
  sdh5318: {
    left: 43,
  },
  groupItem: {
    left: 38,
  },
  r421: {
    left: 92,
  },
  lahoreParent: {
    height: "7.01%",
    top: "86.45%",
    bottom: "6.54%",
    left: 56,
    width: 133,
    position: "absolute",
  },
  vehicleCard: {
    left: -31,
  },
  vehicleCardItem: {
    left: 41,
  },
  vehicleCard1: {
    left: 154,
  },
  createAccount1: {
    lineHeight: 21,
    fontSize: 12,
  },
  buttonShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -42.5,
    height: 79,
    width: 85,
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 7,
    paddingHorizontal: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 7,
    left: "50%",
    top: 0,
    position: "absolute",

    color: theme.palette.alreadyAccount.textColor,
  },
  qrCode11: {
    top: 5,
    left: 15,
    height: 54,
  },
  qrCodeScan: {
    fontSize: 12,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "center",
    width: "100%",
  },
  bestVehicleText2: {
    height: "21.52%",
    top: "78.48%",
    left: "0%",
  },
  servicesCard1: {
    marginLeft: -174.5,
  },
  cctvCamera1Icon: {
    top: 7,
    left: 17,
    width: 50,
    height: 50,
    position: "absolute",
  },
  servicesCard2: {
    marginLeft: -69.5,
  },
  servicesCard4: {
    marginLeft: 140.5,
  },
  servicesCard3: {
    marginLeft: 35.5,
  },
  services: {
    color: theme.palette.dashboard.black,
    left: "0%",
    top: "78%",
    height: "100%",
    fontSize: 12,
    width: "100%",
  },
  bestVehicle1: {
    height: "2.83%",
    width: "50.4%",
    top: "77.34%",
    right: "45.33%",
    bottom: "19.83%",
    left: "4.27%",
    position: "absolute",
  },
  login: {
    fontWeight: "600",
    fontSize: 12,

    color: theme.palette.alreadyAccount.textColor,
    textAlign: "center",
  },
  buttons: {
    top: 754,
    left: 49,
    borderRadius: 7,
    width: 275,
    height: 46,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: theme.palette.dashboard.mainblue,
    position: "absolute",
  },
  adminSidebarcollapsable26: {
    top: 765,
    left: 286,
    height: 24,
  },
  weWillDeliver: {
    top: 20,
    left: 19,
    lineHeight: 34,
    display: "flex",
    width: 300,
    height: 194,
    color: theme.palette.dashboard.black,
    alignItems: "center",
    fontSize: 25,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    overflow: "hidden",
  },
  directTenantBooking1: {
    flex: 1,
    height: 812,
    overflow: "hidden",

    color: theme.palette.alreadyAccount.textColor,
  },
  services1:{
    top: 0,
  },
});

export default DirectTenantBooking;
