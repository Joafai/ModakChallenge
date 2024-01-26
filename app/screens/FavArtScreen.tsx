import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {favoArt} from '../redux/slices/ArtSlice';
import colors from '../config/colors';

const Fav: React.FC<{}> = () => {
  const navigation = useNavigation();
  const artState = useSelector(favoArt);

  return (
    <View style={styles.screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={artState}
        renderItem={({item}) => (
          <Card
            title={item.title}
            artist={item.artist_display.split(',')[0].split('(')[0]}
            imageUrl={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
            onPress={() => navigation.navigate('FeedDetailsFav', {item: item})}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default Fav;
