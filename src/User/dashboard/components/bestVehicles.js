import React,{useState, useEffect} from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet,
    Dimensions,
    ScrollView,
  } from 'react-native';
  import theme from '../../../../theme';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { useVehicleService } from '../../../services/vehicleServices';

const userInfo = () => {

  const [vehicleData, setVehicleData] = useState([]);
  const {getAllVehicles} = useVehicleService();

  useEffect(() => {
    // Fetch vehicle data upon component mount
    const fetchVehicle = async () => {
      try {
        const data = await getAllVehicles(); // Function to fetch vehicle data
        setVehicleData(data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicle();
  }, []);

  return (
    <ScrollView horizontal style={{height:height * 0.407}}>
      {vehicleData.map((vehicle, index) => (
        <View key={index} style={styles.bestVehicle}>
          <View style={styles.moveChild} />
          <View style={styles.moveChild1} />
          <View style={styles.moveChild2} />
          <Image
            style={styles.bestVehicleimage}
            contentFit="cover"
            source={require("../components/vehicle1.png")}
          />
          <View style={[styles.bestVehicleText, styles.bestLayout]}>
            <View style={[styles.bestVehicleTextChild, styles.bestLayout]} />
            <View style={styles.cityparent}>
              <Text style={[styles.city, styles.registrationTypo]}>{vehicle.location}</Text>
              <Image
                style={[styles.groupInner, styles.groupInnerLayout]}
                contentFit="cover"
                source={require("../components/dot.png")}
              />
              <Text style={[styles.TrackingNo, styles.registrationTypo]}>{vehicle.trackerNo}</Text>
              <Image
                style={[styles.ellipseIcon, styles.groupInnerLayout]}
                contentFit="cover"
                source={require("../components/dot.png")}
              />
              <Text style={[styles.registrationNo, styles.registrationTypo]}>{vehicle.regNo}</Text>
            </View>
            <Text style={[styles.TruckType, styles.AllTruckType]}>{vehicle.type}</Text>
          </View>
          <View style={[styles.icon1, styles.textLayout]}>
            <Icon name="more-horiz" size={30} color="white" />
          </View>
          <View style={styles.RatingComponent}>
            <View style={[styles.component2Child, styles.component2Position]} />
            <View style={[styles.component2Item, styles.component2Position]} />
            <Text style={[styles.rating, styles.text2Typo]}>Rating</Text>
            <Text style={[styles.text1, styles.text1Typo]}>
              <Text style={styles.text2Typo}>7.3</Text>
              <Text style={styles.registrationTypo}>/10</Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    bestVehicle: {
        height: height * 0.1,
        width: width * 0.1,
        top: height * 0,
        right: width * 1,
        bottom: height * 0.1,
        left: width * 0.045,
        justifyContent: "center",
        position: "absolute",
      },

      moveChild: {
        height: height * 0.024,
        width: width * 0.017,
        bottom: width * 0.4,
        left: width * 0.41,
        transform: [
          {
            rotate: "90deg",
          },
        ],
        borderRadius: width * 0.1,
        backgroundColor: theme.palette.dashboard.mainblue,
        top: height * 0.275,
        position: "absolute",
      },

      moveChild1: {
        height: height * 0.01,
        width: width * 0.018,
        bottom: width * 0.4,
        left: width * 0.46,
        transform: [
          {
            rotate: "90deg",
          },
        ],
        borderRadius: width * 0.1,
        backgroundColor: theme.palette.dashboard.mediumgray,
        top: height * 0.281,
        position: "absolute",
      },

      moveChild2: {
        height: height * 0.01,
        width: width * 0.018,
        bottom: width * 0.4,
        left: width * 0.5,
        transform: [
          {
            rotate: "90deg",
          },
        ],
        borderRadius: width * 0.1,
        backgroundColor: theme.palette.dashboard.mediumgray,
        top: height * 0.281,
        position: "absolute",
      },

      bestVehicleimage: {
        height: height * 0.276,
        width: width * 0.91,
        top: height * 0,
        left: height * 0,
        position: "absolute",
      },

      bestVehicleText: {
        top: height * 0.3,
      },

      bestLayout: {
        height: height * 0.071,
        width: width * 0.91,
        left: width * 0,
        position: "absolute",
      },

      bestVehicleTextChild: {
        borderBottomRightRadius: height * 0.02,
        borderBottomLeftRadius: height * 0.02,
        backgroundColor: theme.palette.dashboard.bestVehicleColor,
        shadowColor: theme.palette.dashboard.bestVehicleShadowColor,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: height * 0.07,
        shadowOffset: {
          width: width * 0,
          height: height * 0.4,
        },
        top: height * 0,
      },

      TrackingNo: {
        width: width,
        left: width * 0.245,
        fontSize: height * 0.017,
        height: height,
        top: height * 0,
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      ellipseIcon: {
        right: width * 0.03,
        left: width * 0.22,
      },

      registrationNo: {
        width: width * 0.6,
        left: width * 0.445,
        fontSize: height * 0.017,
        height: height,
        top: height * 0,
        color:theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      city: {
        width: width,
        fontSize: height * 0.017,
        height: height,
        top: height * 0,
        left: width * 0,
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      cityparent: {
        height: height * 0.017,
        width: width * 0.54,
        top: height * 0.04,
        right: width * 0,
        bottom: height * 0,
        left: width * 0.045,
        position: "absolute",
      },

      TruckType: {
        height: height * 0.3,
        width: width * 0.5,
        top: height * 0.007,
        fontSize: height * 0.023,
        left: width * 0.047,
        color: theme.palette.alreadyAccount.textColor,
      },

      icon1: {
        width: width * 0.3,
        left: width * 0.77,
        top: height * 0.19,
      },

      bestVehicleText: {
        top: 166,
      },

      registrationTypo: {
        fontWeight: "500",
      },

      groupInner: {
        right: width * 0,
        left: width * 0.42,
      },

      groupInnerLayout: {
        bottom:height ** 0,
        top: height * 0.01,
        width: width * 0.007,
        height: height * 0.004,
        maxHeight: height,
        maxWidth: width,
        position: "absolute",
        overflow: "hidden",
      },

      AllTruckType: {
        fontWeight: "700",
        textAlign: "left",
        position: "absolute",
      },

      component2Child: {
        right: width * 0,
        borderTopLeftRadius: width * 0.02,
        borderBottomLeftRadius: width * 0.02,
        left: width * 0,
        backgroundColor: theme.palette.dashboard.mainblue,
        width: width * 0.2,
      },

      component2Item: {
        right: width * 0,
        left: width * 0.15,
        backgroundColor: theme.palette.dashboard.ratingdarkgray,
        borderBottomRightRadius: width * 0.02,
        borderTopRightRadius: width * 0.02,
      },

      RatingComponent: {
        left: height * 0.02,
        width: width * 0.32,
        top: height * 0.015,
        height: height * 0.04,
        position: "absolute",
      },

      component2Position: {
        width: width * 0.15,
        height: height * 0.037,
        bottom: width * 0,
        top: height * 0,
        position: "absolute",
      },

      rating: {
        left: width * 0.02,
        fontSize: height * 0.015,
        top: height * 0.01,
        width: width,
        height: height,
        color:  theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },

      text2Typo: {
        fontWeight: "500",
      },

      text1: {
        left: width * 0.17,
      },

      text1Typo: {
        fontSize: height * 0.019,
        top: height * 0.007,
        width: width,
        height: height,
        color:  theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        position: "absolute",
      },


      



});

export default userInfo;