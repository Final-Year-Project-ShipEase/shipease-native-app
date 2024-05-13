import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import theme from '../../../../theme';

const BookingInfo = () => {
  return (
    <View style={styles.component1}>
      <View style={styles.details}>
        <View style={styles.event}>
          <Text style={[styles.label, styles.labelTypo2]}>Your Booking</Text>
          <View style={styles.list}>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={styles.itemFlexBox}>
                <Image
                  style={styles.documentTextIcon}
                  contentFit="cover"
                  source={require("../../../../assets/BookingInfoIcon.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>
                  Enter Pickup location
                </Text>
              </View>
              <View style={styles.input}>
                <View style={styles.basePosition}>
                  <View style={[styles.base1, styles.basePosition]} />
                  <View style={styles.baseChild} />
                </View>
                {/*<Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
                */}
                <Text style={[styles.faisalabad, styles.wed27NovTypo]}>
                  Faisalabad
                </Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={styles.itemFlexBox}>
                <Image
                  style={styles.documentTextIcon}
                  contentFit="cover"
                  source={require("../../../../assets/BookingInfoIcon.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>
                  Enter Drop off location
                </Text>
              </View>
              <View style={styles.input1}>
                <View style={styles.basePosition}>
                  <View style={[styles.base1, styles.basePosition]} />
                  <View style={styles.baseChild} />
                </View>
                {/*<Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />*/}
                <Text style={[styles.faisalabad, styles.wed27NovTypo]}>
                  Lahore
                </Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={styles.itemFlexBox}>
                <Image
                  style={styles.documentTextIcon}
                  contentFit="cover"
                  source={require("../../../../assets/BookingInfoIcon.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Dates</Text>
              </View>
              <View style={styles.input1}>
                <View style={styles.basePosition}>
                  <View style={[styles.base1, styles.basePosition]} />
                  <View style={styles.baseChild} />
                </View>
                {/*<Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />*/}
                <Text style={[styles.wed27Nov, styles.wed27NovTypo]}>
                  27 Nov 2023
                </Text>
              </View>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <View style={styles.itemFlexBox}>
                <Image
                  style={styles.documentTextIcon}
                  contentFit="cover"
                  source={require("../../../../assets/BookingInfoIcon.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Time</Text>
              </View>
              <View style={styles.input1}>
                <View style={styles.basePosition}>
                  <View style={[styles.base1, styles.basePosition]} />
                  <View style={styles.baseChild} />
                </View>
                {/*<Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />*/}
                <Text style={[styles.wed27Nov, styles.wed27NovTypo]}>
                  9:00 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.priceSpaceBlock]} />
        <View style={styles.priceSpaceBlock}>
          <Text style={[styles.label, styles.labelTypo2]}>Price Details</Text>
          <View style={styles.list}>
            <View style={[styles.item, styles.itemFlexBox]}>
              <Text style={styles.labelTypo1}>System Estimated Price</Text>
              <Text style={[styles.label7, styles.labelTypo]}>$62.00</Text>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <Text style={styles.labelTypo1}>Apps fee</Text>
              <Text style={[styles.label7, styles.labelTypo]}>$2.50</Text>
            </View>
            <View style={[styles.item, styles.itemFlexBox]}>
              <Text style={styles.labelTypo2}>Total price</Text>
              <Text style={[styles.label11, styles.labelTypo]}>$64.50</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo2: {
    textAlign: "left",
    color: theme.palette.dashboard.black,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: 14,
  },
  itemFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo1: {
    lineHeight: 20,
    textAlign: "left",
    color:theme.palette.dashboard.black,
    fontSize: 14,
  },
  basePosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  wed27NovTypo: {
    fontSize: 14,
    left: 20,
    top: 32,
    textAlign: "left",
    color: theme.palette.dashboard.black,
    fontWeight: "600",
    position: "absolute",
  },
  priceSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  labelTypo: {
    textAlign: "right",
    color: theme.palette.dashboard.black,
    lineHeight: 18,
    fontSize: 14,
  },
  label: {
    alignSelf: "stretch",
  },
  documentTextIcon: {
    width: 20,
    height: 20,
  },
  label1: {
    marginLeft: 10,
  },
  baseChild: {
    top: 51,
    left: 19,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: theme.palette.dashboard.lightgray,
    width: 99,
    height: 2,
    position: "absolute",
  },
  icon: {
    top: 20,
    right: 16,
    width: 24,
    height: 24,
    display: "none",
    position: "absolute",
  },
  faisalabad: {
    letterSpacing: 1.2,
  },
  input: {
    width: 118,
    height: 89,
  },
  item: {
    height: 36,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignSelf: "stretch",
  },
  input1: {
    width: 117,
    height: 89,
  },
  wed27Nov: {
    lineHeight: 16,
    left: 20,
    top: 32,
  },
  list: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  event: {
    height: 163,
    alignSelf: "stretch",
  },
  divider: {
    borderStyle: "dashed",
    borderColor: "#292e32",
    borderRadius: 0.001,
    borderTopWidth: 1,
    height: 1,
  },
  label7: {
    fontWeight: "500",
  },
  label11: {
    fontWeight: "700",
  },
  details: {
    marginLeft: -163.5,
    top: 225,
    left: "50%",
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#a1a1a1",
    borderWidth: 2,
    width: 327,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 14,
    position: "absolute",
  },

});

export default BookingInfo;
