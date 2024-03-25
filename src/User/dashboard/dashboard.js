import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import UserInfocomponent from '../dashboard/components/userInfo';
import theme from '../../../theme';
import SearchBar from '../component/searchBar/searchBar';
import BestVehicles from '../dashboard/components/bestVehicles';''

const Dashboard = () => {

  return (
    <ScrollView style={[styles.pagecolor]}>
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <UserInfocomponent />
      </View>
      <Text style={styles.punchline} numberOfLines={2}>
        Effortless Delivery With Our Logistics Solution
      </Text>
      <View>
        <SearchBar />
      </View>
      <View style={[styles.bestVehicles]}>
        <BestVehicles/>
      </View>
    </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  pagecolor:{
    color: theme.palette.alreadyAccount.textColor,
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.primary.mainwhite,
  },
  userInfo: {
    marginTop: Dimensions.get('window').height * 0.04,
    justifyContent: 'center',
    marginRight: Dimensions.get('window').width * 0.03,
  },
  punchline: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.13,
    left: Dimensions.get('window').width * 0.07,
    fontSize: width * 0.065,
    lineHeight: 35,
    fontFamily: theme.palette.FontFamily.outfit,
    width:width * 0.9,
    fontWeight: '900',
    color: theme.palette.dashboard.black,
  },
  bestVehicles:{
    top:height * 0.2,
  },
});

export default Dashboard;
