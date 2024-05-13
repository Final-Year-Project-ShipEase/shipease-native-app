import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import theme from '../../../../theme';

const Component = () => {

  return (
    <View style={styles.component1}>
      <View style={styles.services}>
      <ScrollView horizontal style={{ height: height * 0.407, width: width * 1 }}>
        <View style={[styles.servicesCard5, styles.servicesCardPosition]}>
          <View style={styles.buttonShadowBox}>
            <Text style={styles.createAccount} />
          </View>
          <Image
            style={styles.qrCode11}
            contentFit="cover"
            source={require("../components/qr.png")}
          />
          <View style={styles.bestVehicleText}>
            <View style={[styles.qrCodeScanWrapper, styles.codePosition]}>
              <Text style={[styles.qrCodeScan, styles.codePosition]}>
                QR-Code Scan
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.servicesCard6, styles.servicesCardPosition]}>
          <View style={styles.buttonShadowBox}>
            <Text style={styles.createAccount} />
          </View>
          <Image
            style={styles.cctvCamera1Icon}
            contentFit="cover"
            source={require("../components/cctv.png")}
          />
          <View style={styles.bestVehicleText}>
            <View style={[styles.qrCodeScanWrapper, styles.codePosition]}>
              <Text style={[styles.qrCodeScan, styles.codePosition]}>
                Video Capturing
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.servicesCard7, styles.servicesCardPosition]}>
          <View style={styles.buttonShadowBox}>
            <Text style={styles.createAccount} />
          </View>
          <Image
            style={styles.cctvCamera1Icon}
            contentFit="cover"
            source={require("../components/cctv.png")}
          />
          <View style={styles.bestVehicleText}>
            <View style={[styles.qrCodeScanWrapper, styles.codePosition]}>
              <Text style={[styles.qrCodeScan, styles.codePosition]}>
                Video Capturing
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.servicesCard8, styles.servicesCardPosition]}>
          <View style={styles.buttonShadowBox}>
            <Text style={styles.createAccount} />
          </View>
          <Image
            style={styles.cctvCamera1Icon}
            contentFit="cover"
            source={require("../components/package.png")}
          />
          <View style={styles.bestVehicleText}>
            <View style={[styles.qrCodeScanWrapper, styles.codePosition]}>
              <Text style={[styles.qrCodeScan, styles.codePosition]}>
                Custom Packages
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
        <View style={[styles.bestVehicle, styles.codePosition]}>
          <Text style={[styles.services1, styles.codePosition1]}>Services</Text>
        </View>
      </View>
    </View>
  );
};

    const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    servicesCardPosition: {
        height: height * 0.093,
        width: width * 0.22,
        top: height * 0.03,
        left: width * 0.56,
        position: "absolute",
      },
      codePosition: {
        top: "0%",
        position: "absolute",
      },
      codePosition1: {
        top: height * -0.006,
        position: "absolute",
      },
      createAccount: {
        lineHeight: 21,
        fontWeight: "500",
        color: theme.palette.alreadyAccount.textColor,
        textAlign: "center",
        fontSize: height * 0.0005,
      },
      buttonShadowBox: {
        paddingVertical: height * 0.013,
        paddingHorizontal:height * 0.013,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: height * 0.004,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: height * 0.012,
        top: 0,
        marginLeft: width * -0.111,
        height: height * 0.1,
        width: width * 0.23,
        left: width * 0.107,
        position: "absolute",
        backgroundColor: theme.palette.alreadyAccount.textColor,
      },
      qrCode11: {
        top: height * 0.008,
        left: width * 0.05,
        width: width * 0.13,
        height: height * 0.06,
        position: "absolute",
      },
      qrCodeScan: {
        fontSize: height * 0.012,
        fontWeight: "600",
        color: theme.palette.dashboard.mainblue,
        height: height,
        top: "0%",
        left: 0,
        width: width * 0.3,
        textAlign: "center",
      },
      qrCodeScanWrapper: {
        height: height,
        left: width * -0.035,
        width: width * 0.1,
      },
      bestVehicleText: {
        height: height * 0.1,
        top: height * 0.075,
        position: "absolute",
        width: width * 0,
      },
      servicesCard5: {
        marginLeft: height * -0.245,
      },
      cctvCamera1Icon: {
        top: height * 0.008,
        left: width * 0.05,
        width: width * 0.13,
        height: height * 0.06,
        position: "absolute",
      },
      servicesCard6: {
        marginLeft: height * -0.12,
      },
      servicesCard7: {
        marginLeft: height * 0.13,
      },
      servicesCard8: {
        marginLeft: height * 0.005,
      },
      services1: {
        fontWeight: "700",
        color: theme.palette.dashboard.black,
        textAlign: "left",
        height: height * 0.03,
        top: height * 0.01,
        width: width * 1,
        fontSize: height * 0.022,
      },
      bestVehicle: {
        height: height * 0.1,
        width: width * 0.1,
        left: width * 0.01,
      },
      services: {
        marginLeft: width * -0.46,
        top: height * 0.01,
        width: width * 0.04,
        height: height * 0.14,
        left: width * 0.5,
        position: "absolute",
      },
      component1: {
        flex: 1,
        height: height * 0.49,
        overflow: "hidden",
        width: "100%",
        backgroundColor: theme.palette.alreadyAccount.textColor,
      },
    });

export default Component;
