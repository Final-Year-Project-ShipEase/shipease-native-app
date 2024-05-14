import React,{useState, useEffect} from 'react';
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
  import { useUserService } from '../../../services/userServices';
  import { getUserId } from '../../../utils/asyncStorage';

const userInfo = () => {
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState('');
  const {getUserById} = useUserService();

  useEffect(() => {
    // Fetch user data upon component mount
    const fetchData = async () => {
      try {
        const id = await getUserId();
        console.log(id);
        setUserId(id);
        console.log(userId);
        const userData = await getUserById(userId); // Function to fetch user data
        setUserData(userData);
        console.log(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  });


  const navigation = useNavigation();
  return (
    <View style={[styles.userInfo, styles.userInfoBg]}>
        <View style={[styles.userInfo, styles.userInfoPosition]}>
          <View style={styles.user} >
          <Text style={styles.name}>{userData.name}</Text>
          </View>
          <View style={styles.type}>
            <Text style={styles.username}>{userData.username}</Text>
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
            onPress={() => {navigation.navigate("Settings")}}
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
