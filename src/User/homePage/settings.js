import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { Avatar, Divider, Switch } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenOne from '../../../assets/ScreenOne.png';
import theme from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Settings = () => {
  const navigation = useNavigation();
  const [showStatus, setShowStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}> Settings</Text>

        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.avatar}>
              <Avatar.Image size={50} source={ScreenOne} />
              <Text style={styles.name}>Ima David</Text>
            </View>
            <Divider bold={true} style={{ backgroundColor: 'black' }} />
            <View style={styles.accountSettings}>
              <Text style={{ fontSize: width * 0.06 }}>Account Settings</Text>

              <View style={styles.features}>
                <View>
                  <Pressable
                    style={styles.editProfile}
                    onPress={() => {
                      navigation.navigate('EditProfile');
                    }}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>Edit Profile</Text>
                    <Icon name="navigate-next" size={width * 0.1} />
                  </Pressable>
                </View>

                <View>
                  <Pressable
                    style={styles.changePassword}
                    onPress={() => {
                      {
                        navigation.navigate('ChangePassword');
                      }
                    }}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>
                      Change Password
                    </Text>
                    <Icon name="navigate-next" size={width * 0.1} />
                  </Pressable>
                </View>

                <View>
                  <Pressable
                    style={styles.changePassword}
                    onPress={() => setShowStatus(!showStatus)}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>
                      Push Notification
                    </Text>
                    <Switch
                      value={showStatus}
                      color={
                        showStatus
                          ? theme.palette.settings.switchColor
                          : 'green'
                      }
                    />
                  </Pressable>
                </View>

                <View>
                  <Pressable
                    style={styles.changePassword}
                    onPress={() => {
                      setDarkMode(!darkMode);
                    }}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>Dark Mode</Text>
                    <Switch
                      value={darkMode}
                      color={
                        darkMode ? theme.palette.settings.switchColor : 'green'
                      }
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <Divider bold={true} style={{ backgroundColor: 'black' }} />

            <View style={styles.accountSettings}>
              <Text style={{ fontSize: width * 0.06 }}>More</Text>

              <View style={styles.features}>
                <View>
                  <Pressable
                    style={styles.editProfile}
                    onPress={() => {
                      navigation.navigate('PrivacyAndPolicy');
                    }}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>
                      Privacy Policy
                    </Text>
                    <Icon name="navigate-next" size={width * 0.1} />
                  </Pressable>
                </View>

                <View>
                  <Pressable
                    style={styles.changePassword}
                    onPress={() => {
                      navigation.navigate('TermsAndConditions');
                    }}
                  >
                    <Text style={{ fontSize: width * 0.05 }}>
                      Terms and Conditions
                    </Text>
                    <Icon name="navigate-next" size={width * 0.1} />
                  </Pressable>
                </View>

                <View>
                  <Pressable style={styles.changePassword}>
                    <Text
                      style={{
                        fontSize: width * 0.05,
                        color: theme.palette.settings.switchColor,
                      }}
                    >
                      Logout
                    </Text>
                    <Icon name="navigate-next" size={width * 0.1} />
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  topContainer: {
    alignItems: 'center',
    width: width,
    height: height * 0.3,
    borderBottomLeftRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
    backgroundColor: theme.palette.settings.backgroundColor,
  },
  title: {
    fontSize: width * 0.06,
    color: theme.palette.settings.titleColor,
    marginTop: height * 0.1,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: height,
    marginTop: height * 0.02,
    borderRadius: width * 0.1,
    backgroundColor: theme.palette.settings.contentContainerColor,
  },
  scrollView: {
    width: width * 0.9,
    borderRadius: width * 0.1,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: width * 0.08,
  },
  name: {
    fontSize: width * 0.06,
    marginLeft: width * 0.04,
  },
  accountSettings: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: width * 0.05,
  },
  features: {
    marginTop: height * 0.04,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: width * 0.8,
    gap: 10,
  },
  editProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
  },
  changePassword: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
  },
});

export default Settings;
