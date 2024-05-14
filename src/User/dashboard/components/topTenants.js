import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import theme from '../../../../theme';
import { useTenantService } from '../../../services/tenantServices';

const TopTenant = () => {
  const {getAllTenants} = useTenantService();
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Fetch tenant data upon component mount
    const fetchTenants = async () => {
      try {
        const data = await getAllTenants(); // Function to fetch tenant data
        setTenants(data);
      } catch (error) {
        console.error('Error fetching tenant data:', error);
      }
    };

    fetchTenants();
  }, []);

  return (
        <View style={[styles.topTenant, styles.topTenantPosition]}>
        <View style={styles.topTenant1}>
          <Text style={[styles.topTenants, styles.seeAllTypo]}>
            Top Tenants
          </Text>
          <View style={styles.SeeAllButton}>
            <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
          </View>
        </View>
        <ScrollView horizontal style={{ height: height * 0.407, width: width * 3 }}>
          {tenants.map((tenant,index) => (
             <View key={index} style={[styles.Inner1, styles.backgroundImage]}>
             <View style={[styles.bgParent, styles.bgParentLayout]}>
               <Image
                 style={[styles.bgIcon, styles.backgroundImage]}
                 contentFit="cover"
                 source={require("../components/ToptenantBg.png")}
               />
               <Image
                 style={[
                   styles.illustrationIcon,
                   styles.bgParentLayout,
                 ]}
                 contentFit="cover"
                 source={require("../components/assest1.png")}
               />
               <Image
                 style={[styles.freepikTruckInject5Icon, styles.vectorIconLayout]}
                 contentFit="cover"
                 source={require("../components/illustration1.png")}
               />
               <Image
                 style={[styles.bgIcon1, styles.iconLayout]}
                 contentFit="cover"
                 source={require("../components/driverImage.png")}
               />
               <View style={[styles.groupParent, styles.groupLayout]}>
                 <View style={[styles.groupWrapper, styles.groupLayout]}>
                   <View style={[styles.groupWrapper, styles.groupLayout]}>
                     <Text style={[styles.Name, styles.NameTypo]}>
                       {tenant.name}
                     </Text>
                     <Text style={[styles.username, styles.davidFlexBox]}>
                       {tenant.username}
                     </Text>
                   </View>
                 </View>
                 <Text style={[styles.email, styles.davidFlexBox]}>
                   {tenant.email}
                 </Text>
               </View>
               <View style={[styles.button, styles.buttonLayout]}>
                 <Text style={[styles.addNew, styles.addNewPosition]}>{tenant.status}</Text>
                 <View style={[styles.buttons, styles.buttonsPosition]} />
               </View>
             </View>
           </View>
          ))}
        </ScrollView>
      </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    topTenant: {
        height:height * 0.18,
        width: width * 1.05,
        top: height * 0,
        right: width * 1.2,
        bottom: height * 1.2,
      },

      topTenantPosition: {
        left: width * 0.04,
        color:theme.palette.alreadyAccount.textColor,
        position: "absolute",
      },

      topTenant1: {
        height: height * 0.05,
        width: width * 0.85,
        right: width * 1.2,
        bottom: height * 1.2,
        left: width * 0.01,
        top: height * 0.009,
        position: "absolute",
      },

    topTenants: {
        width: width * 0.4,
        fontSize: height * 0.018,
        left: width * 0,
        height: height,
        top: height * 0,
        color: theme.palette.dashboard.black,
      },

      seeAllTypo: {
        fontWeight: "900",
        textAlign: "left",
        position: "absolute",
      },
      
      SeeAllButton: {
        height: height * 0.04,
        width: width * 0.2,
        top: height * 0,
        bottom: height * 0,
        left: width * 0.71,
        right: width * 0,
        position: "absolute",
      },

      seeAll: {
        width: width * 0.4,
        fontSize: height * 0.018,
        left: width * 0,
        height: height,
        top: height * 0,
        color: theme.palette.dashboard.mainblue,
      },

      Inner1: {
        top: height * 0.038,
        borderRadius: 13,
        width: width,
        left: width * 0,
        overflow: "hidden",
        backgroundColor: theme.palette.alreadyAccount.textColor,
      },

      backgroundImage: {
        height: height * 0.125,
        width: width * 0.54,
        position: "absolute",
      },

      bgParent: {
        top: height * -0.075,
        width: width * 0.67,
        left: width * 0,
      },

      bgParentLayout: {
        height: height * 0.21,
        position: "absolute",
      },

      freepikTruckInject5Icon: {
        height: height * 0.05,
        width: width * 0.13,
        top: height * 0.08,
        left: width * 0.394,
      },

      vectorIconLayout: {
        maxHeight: height,
        maxWidth: width,
        position: "absolute",
        overflow: "hidden",
      },

      bgIcon1: {
        top: height * 0.084,
      },

      iconLayout: {
        height: height * 0.109,
        width: width * 0.18,
        left: height * 0.01,
        borderRadius: height * 0.003,
        position: "absolute",
      },

      bgIcon: {
        top: height * 0.076,
        borderRadius: height * 0.01,
        width: width * 0.1,
        left: width * 0,
      },

      illustrationIcon: {
        left: width*0.01,
        width: width * 1,
        top: height * 0,
        overflow: "hidden",
      },

      Name: {
        fontSize: height * 0.016,
        width: width * 0.3,
        height: height * 0.4,
        letterSpacing: 1,
        textAlign: "left",
        color: theme.palette.alreadyAccount.textColor,
      },
      username: {
        color: theme.palette.dashboard.tenantlightgray,
        height: height* 0.3,
        width: width * 0.3,
        position: "absolute",
        fontSize: height * 0.015,
        top: height * 0.02,
      },
      groupWrapper: {
        height: height * 0.3,
        top: height * 0,
        left: width * 0,
      },
      email: {
        top: height * 0.042,
        width: width * 0.4,
        height: height *0.3,
        color: theme.palette.alreadyAccount.textColor,
        fontSize: height * 0.012,
        position: "absolute",
      },

      groupParent: {
        top: height * 0.13,
        height: height * 0.1,
        left: width * 0.23,
      },

      addNew: {
        fontSize: height * 0.012,
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "left",
        top: height * 0.004,
      },

      addNewPosition: {
        left: height * 0.01,
        position: "absolute",
      },

      button: {
        top: height * 0.106,
        left: width * 0.22,
        position: "absolute",
      },


      groupLayout: {
        width: width * 0.4,
        position: "absolute",
      },
      NameTypo: {
        fontWeight: "600",
        position: "absolute",
      },
      davidFlexBox: {
        letterSpacing: 1,
        textAlign: "left",
        left: 0,
      },
      buttonLayout: {
        width: width * 1,
        height: height * 1,
      },
      buttonsPosition: {
        borderStyle: "solid",
        top: 0,
        left: 0,
        position: "absolute",
      },
      codePosition: {
        height: height,
        left: width * 0,
        top: height * 0,
      },

      buttons: {
        backgroundColor: theme.palette.dashboard.transparent,
        borderColor: theme.palette.dashboard.mainblue,
        borderWidth: 1,
        width: width * 0.12,
        height: height * 0.022,
        borderRadius: width * 0.03,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
      },

        instanceParent: {
          top: height * 0.038,
            left: width * 0.58,
        },

        groupContainer: {
            borderRadius: width * 0.03,
            width: width * 1,
            left: 0,
            top: 0,
            overflow: "hidden",
            backgroundColor: theme.palette.alreadyAccount.textColor,
          },

          image14Icon: {
            top: height * 0.009,
          },
});

export default TopTenant;