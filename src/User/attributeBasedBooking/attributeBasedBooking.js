import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import theme from '../../../theme';
import ScreenOne from '../../../assets/ScreenOne.png';
import { useNavigation } from '@react-navigation/native';
import SearchBar from './component/searchBar';


const AttributeBasedBooking = () => {

return (
      <View>
      <SearchBar/>
      </View>
);
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    
});

export default AttributeBasedBooking;