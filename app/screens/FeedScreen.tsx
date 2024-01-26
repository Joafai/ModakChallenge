import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import ArtService, {ArtworkItemRes} from '../services/artService';
import {useNavigation} from '@react-navigation/native';

const FeedScreen: React.FC<{}> = () => {
  const [artworks, setArtworks] = useState<ArtworkItemRes[] | undefined>();
  const navigation = useNavigation();

  const getArt = async () => {
    try {
      const response = await ArtService.getArtworks();
      setArtworks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArt();
  }, []);

  useEffect(() => {
    getArt();
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        centerContent={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={artworks}
        renderItem={({item}) => (
          <Card
            title={item.title}
            artist={item.artist_display.split(',')[0].split('(')[0]}
            imageUrl={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
            onPress={() => {
              navigation.navigate('FeedDetails', {item: item});
            }}
            date={item.date_display}
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

export default FeedScreen;
