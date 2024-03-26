import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import theme from '../../../../theme';

const VehicleCheckpoint = () => {
  return (
    <View style={styles.vehicleCheckpoint}>
      <View style={[styles.rectangle, styles.groupPosition]} >
      <Image
            contentFit="cover"
            source={require("../components/Rectangle.png")}
        />
      </View>
      <Text style={styles.healthScore}>Vehicle Checkpoint</Text>
      <View style={styles.lineParent}>
        <View style={[styles.groupChild]} />
        <View style={styles.readMoreParent}>
          <Text style={[styles.readMore, styles.readMoreTypo]}>Tenant</Text>
          <Image
            style={[styles.groupItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../components/checkointPersonImage.png")}
        />
          <Text style={[styles.basedOnYour, styles.readMoreTypo]}>Jon doe</Text>
        </View>
      </View>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../components/maps.png")}
      />
      <Image
        style={[styles.vehicleCheckpointChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../components/check.png")}
      />
      <Image
        style={[styles.truckcomponent, styles.iconLayout]}
        contentFit="cover"
        source={require("../components/truckicon.png")}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  groupPosition: {
    left: width * 0.03,
    right: width * 0.01,
    top: height  * 0.1,
  },
  readMoreTypo: {
    fontSize: height * 0.022,
    textAlign: "left",
    color: theme.palette.alreadyAccount.textColor,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: height,
    overflow: "hidden",
    maxWidth: width,
    position: "absolute",
  },
  rectangle: {
    right: width * 0,
    borderRadius: height * 0.04,
    bottom: "0%",
    height: height * 0.35,
    top: height * 0,
    position: "absolute",
    width: width * 0.936,
  },  
  
  healthScore: {
    height: height * 0.4,
    width: width * 6,
    top: height * 0.122,
    left: height * 0.05,
    fontSize: height * 0.026,
    lineHeight: 24,
    textAlign: "left",
    color: theme.palette.alreadyAccount.textColor,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild: {
    height: width * 0.2,
    top: height * 0.143,
    width: width * 0.807,
    left: width * 0.056,
    borderStyle: "solid",
    borderColor:theme.palette.alreadyAccount.textColor,
    borderTopWidth: 1,
    position: "absolute",
  },
  readMore: {
    height: height * 0.3,
    width: width * 0.6,
    top: height * 0.143,
    left: width * 0.63,
    lineHeight: height * 0.04,
    letterSpacing: 0,
    fontSize: 14,
  },
  groupItem: {
    width: height * 0.035,
    right: width * 0.2,
    left: width * 0.03,
    top: height * 0.14,
    height: height * 0.05,
  },
  basedOnYour: {
    height: height * 0.1,
    width: width * 0.3,
    top: height * 0.15,
    left: width * 0.17,
  },
  readMoreParent: {
    height: height * 0.1,
    width: width * 0.1,
    top: height * 0.012,
    left: width * 0.04,
    position: "absolute",
  },
  lineParent: {
    height: height * 0.1,
    width: width * 0.1,
    top: height * 0.223,
    left: width * 0.04,
    position: "absolute",
  },
  image7Icon: {
    height: height * 0.2,
    width: width * 0.8,
    top: height * 0.16,
    right: width * 0,
    bottom: height * 0,
    left: width * 0.1,
  },
  vehicleCheckpointChild: {
    height: height * 0.13,
    width: width * 0.6,
    top: height * 0.2,
    left: width * 0.21,
  },
  truckcomponent: {
    height: height * 0.07,
    width: width * 0.18,
    top: height * 0.22,
    left: height * 0.303,
  },
  vehicleCheckpoint: {
    flex: 1,
    height: height * 0.29,
    width: width,
    top: height * 0,
    color: theme.palette.dashboard.black,
  },
});

export default VehicleCheckpoint;
