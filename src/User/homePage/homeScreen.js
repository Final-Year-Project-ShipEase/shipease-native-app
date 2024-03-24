import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import ScreenOne from '../../../assets/ScreenOne.png';
import theme from '../../../theme';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Avatar.Image size={50} source={ScreenOne} />
            <View style={styles.profile}>
              <Text style={styles.name}>Ima David</Text>
              <Text style={styles.email}>@imadavid</Text>
            </View>
          </View>
          <View style={styles.iconsContainer}>
            <Ionicons
              name="search"
              size={24}
              color={theme.palette.homePage.searchIconColor}
              style={styles.icon}
            />
            <Ionicons
              name="notifications"
              size={24}
              color={theme.palette.homePage.notificationIconColor}
              style={styles.icon}
            />
            <Ionicons
              name="settings"
              size={24}
              color={theme.palette.homePage.settingIconColor}
              style={styles.icon}
            />
          </View>
        </View>

        <ScrollView style={styles.vehicleContainer} horizontal>
          <View style={styles.vehicleCard}>
            <Text style={styles.vehicleName}>Vehicle 1</Text>
            <Text style={styles.vehicleId}>ID: 12345</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.tenantContainer} horizontal>
          {/* Tenant Cards */}
          <View style={styles.tenantCard}>
            <Text style={styles.tenantName}>Tenant 1</Text>
            <Text style={styles.tenantId}>ID: 54321</Text>
            <Text style={styles.tenantAddress}>Address: 123 Main St</Text>
          </View>
          <View style={styles.tenantCard}>
            <Text style={styles.tenantName}>Tenant 2</Text>
            <Text style={styles.tenantId}>ID: 09876</Text>
            <Text style={styles.tenantAddress}>Address: 456 Elm St</Text>
          </View>
          {/* Add more tenant cards here */}
        </ScrollView>
        <View style={styles.bookingCard}>
          <Text style={styles.bookingTitle}>Booking Details</Text>
          {/* Add booking details here */}
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: height * 0.02,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: width * 0.06,
    marginLeft: width * 0.02,
  },
  email: {
    fontSize: width * 0.04,
    backgroundColor: theme.palette.homePage.emailBackgroundColor,
    borderRadius: 10,
    borderColor: theme.palette.homePage.emailBorderColor,
    overflow: 'hidden',
  },
  profile: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'column',
    marginLeft: width * 0.04,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 8,
  },
  vehicleContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  vehicleCard: {
    width: 200,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehicleId: {
    fontSize: 12,
  },
  tenantContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  tenantCard: {
    width: 200,
    height: 150,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tenantId: {
    fontSize: 12,
  },
  tenantAddress: {
    fontSize: 12,
  },
  bookingCard: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
