import React from 'react';
import { View, Text } from 'react-native';
import {
    StyleSheet,
    Image,
    Pressable,
    Dimensions,
  } from 'react-native';
  import theme from '../../../../theme';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { useNavigation } from '@react-navigation/native';

const userInfo = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Settings')
  };
  return (
    <View style={styles.main}>
          <View style={styles.user} >
          <Text style={styles.name}>Ima David</Text>
          </View>
          <View style={styles.type}>
            <Text style={styles.username}>@ImaDavid1</Text>
          </View>
          <View style={[styles.imageContainer, styles.outerBorder]}>
            <Image
                style={styles.image}
                source={require("../components/image1.jpg")}
            />
            </View>
            <Pressable onPress={handlePress}>
            <View>
            <Image
              style={[styles.iconButton1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../components/icon1.png")} 
            />
            </View>
            </Pressable>
      <View>
      <Image
        style={[styles.iconButton2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../components/icon2.png")}
      />
      </View>
      <View>
      <Image
        style={[styles.iconButton3, styles.iconLayout1]}
        contentFit="cover"
        source={require("../components/icon3.png")}
      />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  main: {
    top:height * 0.02,
    left: width * 0.03,
    right:width * 0.03,
  },

  userInfoBg: {
    backgroundColor: theme.palette.primary.mainwhite,
    overflow: "hidden",
  },

    userInfo: {
      left: width * 0.03,
      height: height * 0.09,
      width: width,
    },

    userInfoPosition: {
      top: height * 0.01,
      left: width * 0.02,
      position: "absolute",
    },

    user: {
      top: height * 0,
      left: width * 0.05,
      position: "absolute",
    },
    
    name: {
      letterSpacing: width * 0.001,
      lineHeight: height * 0.03,
      color: theme.palette.dashboard.black,
      fontWeight: "700",
      left: width * 0.12,
      fontSize: width * 0.05,
      textAlign: "left",
      position: "absolute",
    },

    username: {
      letterSpacing: width * 0.001,
      lineHeight: height * 0.023,
      color: theme.palette.primary.mainwhite,
      textAlign: "left",
      fontSize: width * 0.032,
    },

    type: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: width,
      paddingHorizontal: height * 0.01,
      paddingBottom: height * 0.003,
      paddingTop: height * 0.003,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      left: width * 0.16,
      top:height * 0.03,
      position: "absolute",
      
    },

    imageContainer: {
      width: width * 0.15,
      height: height * 0.07,
      borderRadius: 25,
      overflow: 'hidden',
      
    },
    
    outerBorder: {
      borderWidth: 6,
      borderColor: theme.palette.dashboard.imagecolor,
    },
    
    image: {
      width: '100%',
      height: '100%',
    },

    iconButton1: {
      right: width * 0.07,
    },

    iconButton2: {
      right: width * 0.15,
    },

    iconButton3: {
      right: width * 0.24,
    },

    iconLayout1: {
      top: height * -0.05,
      width: width * 0.05,
      height: height * 0.028,
      padding: 10,
      color: theme.palette.primary.light,
      position: "absolute",
    },


});

export default userInfo;