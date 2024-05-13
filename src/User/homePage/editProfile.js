import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { TextInput, Avatar, Button, Snackbar } from 'react-native-paper';
import truck from '../../../assets/truck.png';
import theme from '../../../theme'; 
import { useUserService } from '../../services/userServices';

const EditProfile = () => {
  const { updateUser } = useUserService();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const handleSaveChanges = async () => {
    try {
      // Call updateUser function with the updated user data
      await updateUser({ name, email, phoneNumber, city });
      setSnackBarVisible(true);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar.Image size={100} source={truck} />
        </View>

        <View style={styles.form}>
          <View style={styles.username}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              mode="outlined"
              placeholder="Hamza Idrees"
              style={styles.textInput}
              textColor={theme.palette.editProfile.textColor}
              selectionColor={theme.palette.editProfile.inputColor}
              outlineColor={theme.palette.editProfile.outlineColor}
              activeOutlineColor={theme.palette.editProfile.outlineColor}
              left={<TextInput.Icon icon="account" />}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.email}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              mode="outlined"
              placeholder="hamzaidrees@gmail.com"
              style={styles.textInput}
              textColor={theme.palette.editProfile.textColor}
              selectionColor={theme.palette.editProfile.inputColor}
              outlineColor={theme.palette.editProfile.outlineColor}
              activeOutlineColor={theme.palette.editProfile.outlineColor}
              left={<TextInput.Icon icon="email" />}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.phoneNumber}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              mode="outlined"
              placeholder="03067566528"
              style={styles.textInput}
              textColor={theme.palette.editProfile.textColor}
              selectionColor={theme.palette.editProfile.inputColor}
              outlineColor={theme.palette.editProfile.outlineColor}
              activeOutlineColor={theme.palette.editProfile.outlineColor}
              left={<TextInput.Icon icon="phone" />}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View style={styles.city}>
            <Text style={styles.label}>City</Text>
            <TextInput
              mode="outlined"
              placeholder="Faisalabad"
              style={styles.textInput}
              textColor={theme.palette.editProfile.textColor}
              selectionColor={theme.palette.editProfile.inputColor}
              outlineColor={theme.palette.editProfile.outlineColor}
              activeOutlineColor={theme.palette.editProfile.outlineColor}
              left={<TextInput.Icon icon="city" />}
              value={city}
              onChangeText={setCity}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            textColor={theme.palette.editProfile.buttonColor}
            buttonColor={theme.palette.editProfile.buttonBackgroundColor}
            style={styles.button}
            onPress={handleSaveChanges}
          >
            Save Changes
          </Button>
        </View>
      </View>
      <Snackbar
        visible={snackBarVisible}
        onDismiss={() => setSnackBarVisible(false)}
      >
        Profile updated successfully!
      </Snackbar> 
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  avatar: {
    marginTop: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.06,
    borderRadius: 15,
    gap: 20,
    width: width * 0.8,
    height: height * 0.6,
  },
  label: {
    fontSize: width * 0.05,
    color: theme.palette.editProfile.labelColor,
  },
  textInput: {
    width: width * 0.8,
    height: height * 0.08,
    marginTop: height * 0.01,
    borderWidth: 1,
    borderRadius: width * 0.08,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02,
    width: width * 0.8,
    height: height * 0.1,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    width: width * 0.8,
    height: height * 0.08,
    borderRadius: width * 0.5,
  },
});

export default EditProfile;
