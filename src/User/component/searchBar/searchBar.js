import React from 'react';
import { View, Text } from 'react-native';
import {
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import theme from '../../../../theme';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import MenuIcon from 'react-native-vector-icons/Feather';

  const SearchBar = () => {
    return (
        <View>
          <View style={[styles.searchBar, styles.bgLayout]}>
            <View style={[styles.bg, styles.bgLayout]}>
              <View style={[styles.bgChild, styles.bgLayout]} />
              <Icon name="search" style={[styles.searchIcon, styles.iconPosition]} />
            </View>
            <View style={[styles.text, styles.textLayout]}>
              <Text style={styles.search}>Search...</Text>
            </View>
            <MenuIcon name="menu" style={[styles.searchIcon, styles.iconPosition1]} />
          </View>
        </View>
    );
  };


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  searchBar: {
    top: height * 0.103,
    left: width * 0.07,
    opacity: 0.6,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: height * 0.004,
    shadowOffset: {
      width: width * 0,
      height: height * 0.005,
    },
    shadowColor: theme.palette.dashboard.shadowColor1,
  },

  bgLayout: {
    width: width * 0.86,
    height:height * 0.07,
    position: "absolute",
  },

  bg: {
    top: 0,
    left: 0,
  },

  bgChild: {
    borderRadius: width * 1,
    backgroundColor: theme.palette.dashboard.searchbarcolor,
    top: 0,
    left: 0,
  },

  searchIcon: {
    top: height * 0.023,
    width: width * 0.06,
    height: height * 0.16,
    fontSize: width * 0.05,
  },

  iconPosition: {
    left: width * 0.06,
    position: "absolute",
  },

  iconPosition1: {
    right: width * 0.06,
    position: "absolute",
  },

  text: {
    left: width * 0.16,
    width: width * 0.3,
    top: height * 0.016,
  },

  textLayout: {
    height: height * 0.1,
    position: "absolute",
  },

  search: {
    fontSize: width * 0.05,
    lineHeight: height * 0.04,
    color: theme.palette.dashboard.searchbartextcolor,
    width: width * 0.3,
    textAlign: "left",
    fontFamily: theme.palette.FontFamily.regular,
    top: 0,
    left: 0,
    position: "absolute",
  },

      
});

export default SearchBar;