import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import theme from '../../../../theme';

const TopTenant = () => {

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
        <View style={[styles.Inner1, styles.backgroundImage]}>
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
                  <Text style={[styles.davidWill, styles.davidWillTypo]}>
                    David Will
                  </Text>
                  <Text style={[styles.david12, styles.davidFlexBox]}>
                    @david12
                  </Text>
                </View>
              </View>
              <Text style={[styles.david12gmailcom, styles.davidFlexBox]}>
                david12@gmail.com
              </Text>
            </View>
            <View style={[styles.button, styles.buttonLayout]}>
              <Text style={[styles.addNew, styles.addNewPosition]}>Active</Text>
              <View style={[styles.buttons, styles.buttonsPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.instanceParent, styles.backgroundImage]}>
          <View style={[styles.groupContainer, styles.backgroundImage]}>
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
                style={[
                  styles.freepikTruckInject5Icon,
                  styles.vectorIconLayout,
                ]}
                contentFit="cover"
                source={require("../components/illustration1.png")}
              />
              {/*<Image
                style={[styles.bgIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-131.png")}
              />*/}
              <View style={[styles.groupParent, styles.groupLayout]}>
                <View style={[styles.groupWrapper, styles.groupLayout]}>
                  <View style={[styles.groupWrapper, styles.groupLayout]}>
                    <Text style={[styles.davidWill, styles.davidWillTypo]}>
                      David Will
                    </Text>
                    <Text style={[styles.david12, styles.davidFlexBox]}>
                      @david12
                    </Text>
                  </View>
                </View>
                <Text style={[styles.david12gmailcom, styles.davidFlexBox]}>
                  david12@gmail.com
                </Text>
              </View>
              <View style={[styles.button, styles.buttonLayout]}>
                <Text style={[styles.addNew, styles.addNewPosition]}>
                  Active
                </Text>
                <View style={[styles.buttons, styles.buttonsPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={[styles.image14Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../components/driverImage1.png")}
          />
        </View>
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
        top: "40.26%",
        right: "25.33%",
        bottom: "40.5%",
        left: "58.89%",
      },

      vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      bgIcon1: {
        top: height * 0.084,
      },

      iconLayout: {
        height: 87,
        width: 68,
        left: 7,
        borderRadius: 13,
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

      davidWill: {
        fontSize: 13,
        width: 82,
        height: 14,
        letterSpacing: 1,
        textAlign: "left",
        left: 0,
        color: theme.palette.alreadyAccount.textColor,
        top: 0,
      },
      david12: {
        color: theme.palette.dashboard.ratingdarkgray,
        height: 13,
        width: 113,
        position: "absolute",
        fontSize: 14,
        top: 14,
      },
      groupWrapper: {
        height: 26,
        top: 0,
        left: 0,
      },
      david12gmailcom: {
        top: 26,
        width: 97,
        height: 14,
        color: theme.palette.alreadyAccount.textColor,
        fontSize: 14,
        position: "absolute",
      },

      groupParent: {
        top: 100,
        height: 40,
        left: 83,
      },

      addNew: {
        fontSize: 14,
        color: theme.palette.dashboard.ratingdarkgray,
        textAlign: "left",
        top: 1,
      },

      addNewPosition: {
        left: 5,
        position: "absolute",
      },

      button: {
        top: 90,
        left: 83,
        position: "absolute",
      },


      groupLayout: {
        width: 113,
        position: "absolute",
      },
      davidWillTypo: {
        fontWeight: "600",
        position: "absolute",
      },
      davidFlexBox: {
        letterSpacing: 1,
        textAlign: "left",
        left: 0,
      },
      buttonLayout: {
        width: 25,
        height: 10,
      },
      buttonsPosition: {
        borderStyle: "solid",
        top: 0,
        left: 0,
        position: "absolute",
      },
      codePosition: {
        height: "100%",
        left: "0%",
        top: "0%",
      },

      buttons: {
        backgroundColor: theme.palette.dashboard.ratingdarkgray,
        borderColor: theme.palette.dashboard.mainblue,
        borderWidth: 1,
        width: 25,
        height: 10,
        borderRadius: 13,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
      },

        instanceParent: {
            top: 30,
            left: 209,
        },

        groupContainer: {
            borderRadius: 13,
            width: 200,
            left: 0,
            top: 0,
            overflow: "hidden",
            backgroundColor: theme.palette.alreadyAccount.textColor,
          },

          image14Icon: {
            top: 7,
          },
});

export default TopTenant;