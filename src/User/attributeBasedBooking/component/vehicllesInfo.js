import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import theme from '../../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';


const VehiclesInfo = () => {
    const [isSolid, setIsSolid] = useState(false);

    const toggleHeart = () => {
      setIsSolid((prev) => !prev); // Toggle the state
    };

return (
    <View style={[styles.pages]}>
      <View style={[styles.truckComponent, styles.truckLayout1]}>
        <View style={[styles.textArea, styles.textPosition]}>
          <View style={[styles.buttons4, styles.buttonsPosition]}>
            <Text style={styles.addNew4}>Available</Text>
          </View>
          <View style={[styles.TypeParent, styles.parentPosition]}>
            <Text style={[styles.Type, styles.TruckTypo]}>
              JUMBO TRAILER
            </Text>
            <View style={styles.cityparent}>
              <Text
                style={[styles.city, styles.cityTypo]}
              >{`faisalabad  `}</Text>
                <Image
                style={[styles.groupItem, styles.groupPosition]}
                contentFit="cover"
                source={require("./dot.png")}
              />
              <Text style={[styles.trackerno, styles.registrationTypo]}>TBF7393</Text>
                <Image
                style={[styles.groupChild, styles.groupChildPosition1]}
                contentFit="cover"
                source={require("./dot.png")}
              />
              <Text style={[styles.registrationNo, styles.registrationTypo]}>R-521</Text>
            </View>
          </View>
          <Pressable onPress={toggleHeart}>
          <View style={styles.heartIcon}>
                <Text>
                {isSolid ? (
                    <Icon name="heart" size={25} style={[styles.heart]} />
                ) : (
                    <Icon name="heart-o" size={25} color="black" />
                )}
                </Text>
            </View>
            </Pressable>
        </View>
        <Image
          style={[styles.VehicleImage, styles.iconLayout]}
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

    truckComponent: {
        top: height * 0.03,
        height: height * 0.2,
        left: width * 0.07,
        width: width * 0,
      },

      truckLayout1: {
        width: width * 0.8,
        height: height * 0.05,
        position: "absolute",
      },

      textArea: {
        width:width * 0.1,
        left: width * 0.29,
        right: width * 0,
        bottom: height * 0.3,
        top: height * 0.1,
        height: height * 0.3,
        position: "absolute",
      },

      textPosition: {
        bottom: height * 0.3,
        top:  height * 0.01,
        height: height * 0.3,
      },

      addNew4: {
        fontSize: height * 0,
        textAlign: "left",
        color: theme.palette.alreadyAccount.textColor,
      },
      buttons4: {
        width: width * 0.12,
        right: width * 0.1,
        left: width * 0.001,
      },

      buttonsPosition: {
        backgroundColor:theme.palette.dashboard.lightblue,
        borderRadius: width * 0.043,
        bottom: height * 0.1,
        top: height * 0,
        height: height * 0.04,
        width: width * 0.22,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },

      parentPosition: {
        top: height * 0.045,
        height: height * 0.045,
        bottom:height * 0,
      },

      TypeParent: {
        width: width * 0.4,
        right: width * 0.17,
        left: width * 0,
        position: "absolute",
      },

      TruckTypo: {
        color: theme.palette.dashboard.black,
        fontSize: height * 0.018,
        textAlign: "left",
        top: height * 0,
        height: height,
        fontWeight: "700",
      },

      Type: {
        left: width * 0.007,
        position: "absolute",
        width: width,
      },

      cityparent: {
        width: width * 0.5,
        right: width * 0.12,
        bottom: height * 0.12,
        top: height * 0.024,
        height: height * 0.02,
        left: width * 0.01,
        position: "absolute",
      },

      city: {
        width: width,
        left: width * 0,
        position: "absolute",
      },

      cityTypo: {
        color: theme.palette.dashboard.black,
        fontSize: height * 0.017,
        textAlign: "left",
        top: height * 0,
        height: height,
        fontWeight: "400",
      },

      groupChild: {
        right: width * 0.02,
        left: width * 0.352,
        width: width * 0.008,
        height: height * 0.003,
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      trackerno: {
        left: width * 0.19,
      },

      registrationTypo: {
        width:width*0.17,
        color: theme.palette.dashboard.black,
        fontSize: height *  0.017,
        textAlign: "left",
        top: height * 0,
        height: height,
        fontWeight: "400",
        position: "absolute",
      },

      registrationNo: {
        left: height * 0.17,
      },

      groupItem: {
        right: width * 0.02,
        left: width * 0.18,
        width: width * 0.008,
        height: height * 0.003,
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      groupPosition: {
        bottom: "40%",
        top: "46.67%",
      },

      groupChildPosition1: {
        bottom: height * 0.2,
        top: height * 0.01,
      },

      islamabadParentPosition: {
        width: 152,
        bottom: "7.25%",
        left: 0,
        position: "absolute",
      },
      islamabadLayout: {
        width: 66,
        left: 0,
      },
      groupChildLayout: {
        width: 2,
        height: "13.33%",
        maxHeight: "100%",
        position: "absolute",
      },

      VehicleImage: {
        right: width * 0.1,
        width: width * 0.26,
        borderRadius: width * 0.5,
        left: width * 0.0005,
        bottom: height * 0,
        top: height * 0,
        height: height * 0.11,
        overflow: "hidden",
      },

      iconLayout: {
        borderRadius: width * 0.04,
        position: "absolute",
      },

      heart: {
        colo:theme.palette.dashboard.mainblue,
      },

      heartIcon:{
        position: 'relative',
        left: width * 0.47,
        top: height * 0
      },

});

export default VehiclesInfo;