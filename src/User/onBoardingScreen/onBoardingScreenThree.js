import React from 'react';
import { Card, Appbar, Button } from 'react-native-paper';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import Dots from 'react-native-dots-pagination';
import theme from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import ScreenThree from '../../../assets/ScreenThree.png';

const OnBoardingScreenThree = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Button
          mode="contained"
          textColor={theme.palette.button.textColor}
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        >
          Skip
        </Button>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={ScreenThree}
          style={styles.logo}
          resizeMode="contain"
        ></Image>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Door to Door Service</Text>
            <Text style={styles.content}>
              Effortlessly book reliable mini trucks for all your logistics
              needs with our user-friendly app
            </Text>
          </View>

          <View style={styles.paginationContainer}>
            <Dots
              length={3}
              active={2}
              activeColor="red"
              activeDotHeight={height * 0.03} // Example of using percentage of screen height
            />
            <Button
              mode="contained"
              style={styles.nextButton}
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}
            >
              Create Account
            </Button>

            <Pressable
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            >
              <Text style={styles.alreadyAccount}>
                {' '}
                Already Have an account? Login
              </Text>
            </Pressable>
          </View>
        </Card.Content>
      </Card>
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
  appbar: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: height * 0.05, // Example of using percentage of screen height
    paddingRight: width * 0.05, // Example of using percentage of screen width
  },
  button: {
    backgroundColor: theme.palette.button.backgroundColor,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1, // Example of using percentage of screen height
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3, // Example of using percentage of screen height
  },
  card: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.card.backgroundColor,
    marginTop: height * 0.05, // Example of using percentage of screen height
    borderRadius: 0,
    borderTopLeftRadius: height * 0.05, // Example of using percentage of screen height
    borderTopRightRadius: height * 0.05, // Example of using percentage of screen height
    paddingHorizontal: width * 0.05, // Example of using percentage of screen width
  },
  contentContainer: {
    flex: 2,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: height * 0.04, // Example of using percentage of screen height
    color: theme.palette.card.titleColor,
    marginBottom: height * 0.02, // Example of using percentage of screen height
  },
  content: {
    fontSize: height * 0.023, // Example of using percentage of screen height
    color: theme.palette.card.textColor,
    textAlign: 'center',
    //marginBottom: height * 0.02
  },
  paginationContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05, // Example of using percentage of screen height
  },
  nextButton: {
    backgroundColor: theme.palette.card.buttonColor,
    height: height * 0.08, // Example of using percentage of screen height
    width: width * 0.5, // Example of using percentage of screen width
    borderRadius: height * 0.04, // Example of using percentage of screen height
    justifyContent: 'center',
  },
  alreadyAccount: {
    marginTop: height * 0.02,
    color: theme.palette.alreadyAccount.textColor,
  },
});

export default OnBoardingScreenThree;
