import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import theme from '../../../theme';

const TermsAndConditions = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Terms And Conditions</Text>
        <Text style={styles.description}>
          Last updated: [20-March-2024] Please read these terms and conditions
          carefully before using the Shipease mobile application (the "Service")
          operated by Shipease ("us", "we", or "our"). Your access to and use of
          the Service is conditioned on your acceptance of and compliance with
          these Terms. These Terms apply to all visitors, users, and others who
          access or use the Service. By accessing or using the Service you agree
          to be bound by these Terms. If you disagree with any part of the terms
          then you may not access the Service..
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Text style={styles.description}>
          When you create an account with us, you must provide accurate and
          complete information. Failure to do so constitutes a breach of the
          Terms, which may result in immediate termination of your account on
          our Service. You are responsible for safeguarding the password that
          you use to access the Service and for any activities or actions under
          your password, whether your password is with our Service or a
          third-party service. You agree not to disclose your password to any
          third party. You must notify us immediately upon becoming aware of any
          breach of security or unauthorized use of your account.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Intellectual Property</Text>
        <Text style={styles.description}>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of Shipease and its licensors.
          The Service is protected by copyright, trademark, and other laws of
          both the Pakistan and foreign countries. Our trademarks and trade
          dress may not be used in connection with any product or service
          without the prior written consent of Shipease.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Termination</Text>
        <Text style={styles.description}>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms. Upon termination, your right to
          use the Service will immediately cease. If you wish to terminate your
          account, you may simply discontinue using the Service. Governing Law:
          These Terms shall be governed and construed in accordance with the
          laws of Pakistan, without regard to its conflict of law provisions.
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between
          us regarding the Service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Changes</Text>
        <Text style={styles.description}>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least [30 days'] notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our
          sole discretion. By continuing to access or use our Service after
          those revisions become effective, you agree to be bound by the revised
          terms. If you do not agree to the new terms, please stop using the
          Service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.contact}>
          Contact Us If you have any questions about these Terms, please contact
          us at
          <Text style={styles.email}>
            {' '}
            [F00290@cfd.nu.edu.pk] [F200204@cfd.nu.edu.pk]
            [F200132@cfd.nu.edu.pk]
          </Text>
        </Text>
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
    marginBottom: Dimensions.get('window').height * 0.02,
  },
  contact: {
    fontSize: width * 0.04,
    lineHeight: height * 0.035,
    textAlign: 'auto',
    marginBottom: height * 0.02,
  },
  email: {
    color: theme.palette.primary.main,
    textDecorationLine: 'underline',
  },
});

export default TermsAndConditions;
