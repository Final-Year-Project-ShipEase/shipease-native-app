import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable} from "react-native";
import theme from "../../../../theme";
import PickUpLocationModal from '../../modal/PickUplocationModal';

const Component = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBookingPress = () => {
    console.log("modal open");
    handleOpenModal();
  };

  return (
    <View style={styles.component1}>
      <View style={styles.vectorParent}>
        <View style={styles.bookingParent}>
          <View style={styles.booking}>
          <Pressable onPress={handleBookingPress} accessible={true} accessibilityLabel="Booking">
            <Text style={[styles.booking1, styles.booking1Typo]}>Booking</Text>
            <Image
              style={[styles.completedIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../components/completed.png")}
            />
                <PickUpLocationModal visible={showModal} onClose={handleCloseModal} />
          </Pressable>
          </View>
          <View style={styles.home}>
            <Text style={styles.home1}>Home</Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../components/Vector.png")}
            />
          </View>
          <View style={[styles.favourite, styles.favLayout]}>
            <View style={[styles.fav, styles.favPosition]}>
              <Text style={[styles.favourite1, styles.booking1Typo]}>
                Favourite
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../components/Vector2.png")}
            />
          </View>
          <View style={[styles.profile, styles.home2Layout]}>
            <View style={[styles.home2, styles.home2Layout]}>
              <Text style={[styles.favourite1, styles.booking1Typo]}>
                Profile
              </Text>
            </View>
            <Image
              style={[
                styles.adminSidebarcollapsable28,
                styles.groupItemPosition,
              ]}
              contentFit="cover"
              source={require("../components/Vector1.png")}
            />
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    booking1Typo: {
      textAlign: "left",
      color: theme.palette.dashboard.black,
      lineHeight: height * 0.03,
      letterSpacing: 0,
      fontSize: height * 0.014,
      left: width * 0,
      position: "absolute",
    },
    vectorIconLayout: {
      maxHeight: height,
      maxWidth: width,
      top: height * 0,
      position: "absolute",
      overflow: "hidden",
    },
    favLayout: {
      width: width * 0.12,
      position: "absolute",
    },
    favPosition: {
      height: height * 0.12,
      top: height * 0.02,
      left: width * 0,
    },
    home2Layout: {
      width: width * 0.12,
      position: "absolute",
    },
    groupItemPosition: {
      left: width * 0.03,
      position: "absolute",
    },
    groupChild: {
      borderRadius: width * 0.03,
      left: width * 0,
      top: height * 0.12,
      height: height * 0.01,
      width: width * 0.1,
      position: "absolute",
    },
    booking1: {
      top: height * 0.021,
    },
    completedIcon: {
      height: height * 0.02,
      width:  width * 0.04,
      right: width * 0,
      bottom: height * 0,
      left: width * 0.038,
    },
    booking: {
      left: height * 0.13,
      width: width * 0.2,
      height: height * 0.1,
      top: height * 0.01,
      position: "absolute",
    },
    home1: {
      color: theme.palette.dashboard.mainblue,
      top: height * 0.02,
      textAlign: "left",
      lineHeight: height * 0.02,
      letterSpacing: 0,
      fontSize: height * 0.014,
      position: "absolute",
    },
    vectorIcon: {
      height: height * 0.02,
      width: width * 0.043,
      left: width * 0.02,
    },
    home: {
      left: width * 0.05,
      width: width * 0.09,
      height: height * 0.07,
      top: height * 0.017,
      position: "absolute",
    },
    favourite1: {
      top: 0,
    },
    fav: {
      width: width * 0.3,
      position: "absolute",
    },
    vectorIcon1: {
      height: height * 0.02,
      width: width * 0.05,
      left: width * 0.042,
    },
    favourite: {
      left: width * 0.53,
      height: height * 0.1,
      top: height * 0.01,
    },
    home2: {
      height: height * 0.01,
      top: height * 0.02,
      left: width * 0,
    },
    adminSidebarcollapsable28: {
      width: width * 0.05,
      height: height * 0.02,
      top: height * 0,
    },
    profile: {
      top: height * 0.008,
      left: width * 0.8,
      height: height * 0.01,
    },
    bookingParent: {
      top: height * 0.01,
      left: width * 0.04,
      width: width * 1,
      height: height * 0.1,
      position: "absolute",
      overflow: "hidden",
    },
    groupItem: {
      top: height * 0.004,
      borderTopRightRadius: width * 0.08,
      borderBottomRightRadius: width * 0.08,
      backgroundColor: theme.palette.dashboard.ratingdarkgray,
      width: width * 0.94,
      height: height * 0.002,
    },
    vectorParent: {
      top: height * 0.006,
      left: width * 0.01,
      height: height * 0.1,
      width: width * 0.04,
      position: "absolute",
    },
    component1: {
      flex: 1,
      width: "100%",
      height: height * 0.1,
      overflow: "hidden",
    },
  });
  
  export default Component;
