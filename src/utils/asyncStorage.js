import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserId() {
    try {
        const userId = await AsyncStorage.getItem('userId');
        return userId;
    } catch (error) {
        console.error('Error retrieving user ID:', error);
        return null;
    }
}

export async function getUsername() {
    try {
        const username = await AsyncStorage.getItem('username');
        return username;
    } catch (error) {
        console.error('Error retrieving username:', error);
        return null;
    }
}

export async function getUserEmail() {
    try {
        const email = await AsyncStorage.getItem('email');
        return email;
    } catch (error) {
        console.error('Error retrieving email:', error);
        return null;
    }
}

export async function clearData() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error retrieving email:', error);
    }
}