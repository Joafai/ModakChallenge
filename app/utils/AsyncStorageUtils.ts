import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArtworkItemRes} from '../services/artService';

const FAVORITES_KEY = 'favorites';

export const saveFavorites = async (
  favorites: ArtworkItemRes[],
): Promise<void> => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to AsyncStorage:', error);
  }
};

export const getFavorites = async (): Promise<ArtworkItemRes[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? (JSON.parse(favorites) as ArtworkItemRes[]) : [];
  } catch (error) {
    console.error('Error retrieving favorites from AsyncStorage:', error);
    return [];
  }
};

export default {saveFavorites, getFavorites};
