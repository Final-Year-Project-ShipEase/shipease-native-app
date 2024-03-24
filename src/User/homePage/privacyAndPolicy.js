import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import theme from '../../../theme';

const PrivaryAndPolicy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Privacy And Policy</Text>
        <Text style={styles.description}>
          At Shipease, we are committed to protecting the privacy and security
          of your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your information when you use
          our mobile application or website.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Personal Information: We may collect personal information such as
            your name, email address, phone number, and payment information when
            you register an account with Shipease or make use of our services.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Usage Data: We may also collect information about how you interact
            with our app or website, including your device information, IP
            address, and browsing activity.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Location Information: With your consent, we may collect location
            data to provide you with location-based services such as tracking
            your shipment.
          </Text>
        </Unorderedlist>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Providing Services: To deliver the services you request, such as
            processing your orders and managing your account.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Improving User Experience: To enhance and personalize your
            experience with our app or website, including providing tailored
            content and recommendations.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Communication: To communicate with you about your account, updates,
            promotions, and other relevant information.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.list}>
          <Text style={styles.listItem}>
            Analytics: To analyze user trends and preferences, monitor the
            performance of our app or website, and improve our services.
          </Text>
        </Unorderedlist>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Changes to This Policy</Text>
        <Text style={styles.description}>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          updated policy on our website or app. We encourage you to review this
          Privacy Policy periodically for any updates.
        </Text>
        <Text style={styles.contact}>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{' '}
          <Text
            style={styles.email}
            onPress={() => {
              // Handle email contact
            }}
          >
            contact@shipease.com
          </Text>
        </Text>
        <Text style={styles.lastUpdated}>Last Updated: 20-March-2024</Text>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: height * 0.05,
  },
  contentContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.05,
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.primary.main,
    marginBottom: height * 0.02,
  },
  description: {
    fontSize: width * 0.04,
    lineHeight: height * 0.035,
    textAlign: 'justify',
    marginBottom: height * 0.03,
  },
  section: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.03,
  },
  sectionTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    marginBottom: height * 0.02,
  },
  list: {
    marginLeft: width * 0.05,
    marginBottom: height * 0.015,
  },
  listItem: {
    fontSize: width * 0.04,
    lineHeight: height * 0.035,
    textAlign: 'justify',
  },
  contact: {
    fontSize: width * 0.04,
    lineHeight: height * 0.035,
    textAlign: 'justify',
    marginBottom: height * 0.02,
  },
  email: {
    color: theme.palette.primary.main,
    textDecorationLine: 'underline',
  },
  lastUpdated: {
    fontSize: width * 0.04,
    textAlign: 'right',
    color: theme.palette.text.light,
  },
});

export default PrivaryAndPolicy;
