import React from 'react';
import { View, Text } from 'react-native';
import {
    StyleSheet,
    Image,
    Dimensions,
  } from 'react-native';
  import theme from '../../../../theme';
  import Icon from 'react-native-vector-icons/FontAwesome';

const userInfo = () => {
  return (
    <View style={[styles.userInfo, styles.userInfoBg]}>
        <View style={[styles.userInfo, styles.userInfoPosition]}>
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
            <Icon
            style={[styles.iconButton1, styles.iconLayout1]}
            name="search"
            size={22}
            />
            <Icon
            style= {[styles.iconButton2, styles.iconLayout1]}
            name="bell"
            size={22}
            />
            <Icon
            style= {[styles.iconButton3, styles.iconLayout1]}
            name="cog"
            size={22}
            />
        </View>
    </View>

  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
        fontFamily: theme.palette.FontFamily.regular,
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
        fontFamily: theme.palette.FontFamily.regular,
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
        right: width * 0.31,
      },

      iconButton2: {
        right: width * 0.2,
      },

      iconButton3: {
        right: width * 0.1,
      },

      iconLayout1: {
        top: height * 0.02,
        color: theme.palette.primary.light,
        position: "absolute",
      },
      

    });

export default userInfo;
