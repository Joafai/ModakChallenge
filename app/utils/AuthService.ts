import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA_KEY = 'USER_DATA';

export default class AuthService {
  static saveUserData = async (userData: any): Promise<void> => {
    try {
      await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  static getUserData = async (): Promise<any | null> => {
    try {
      const userData = await AsyncStorage.getItem(USER_DATA_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  };

  static resetUserData = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
      console.error('Error resetting user data:', error);
    }
  };
}
