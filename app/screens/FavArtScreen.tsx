import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {favoArt} from '../redux/slices/ArtSlice';
import colors from '../config/colors';
import AuthService from '../utils/AuthService';

const Fav: React.FC<{}> = () => {
  const navigation = useNavigation();
  const artState = useSelector(favoArt);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await AuthService.getUserData();
      setUserData(data);
    };

    fetchUserData();
  }, [artState]);

  return (
    <View
      style={[
        styles.screen,
        {
          alignItems: userData?.favoArt.length === 0 ? 'center' : undefined,
        },
      ]}>
      {userData?.favoArt.length !== 0 ? (
        <FlatList
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={userData?.favoArt}
          renderItem={({item}) => (
            <Card
              title={item.title}
              artist={item.artist_display.split(',')[0].split('(')[0]}
              imageUrl={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              onPress={() =>
                navigation.navigate('FeedDetailsFav', {item: item})
              }
              date={item.date}
            />
          )}
        />
      ) : (
        <Text style={styles.noFav}>Add your favorite Art!!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  noFav: {
    textAlign: 'center',
  },
  flatlist: {},
});

export default Fav;
