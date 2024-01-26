import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addArt, favoArt, removeArt} from '../redux/slices/ArtSlice';
import colors from '../config/colors';
import Text from '../components/Text';
import {ArtworkItemRes} from '../services/artService';
import {Heart, X} from 'react-native-feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AuthService from '../utils/AuthService';

type FeedDetailScreenProps = {
  route: {params: {item: ArtworkItemRes}};
};

const FeedDetailScreen: React.FC<FeedDetailScreenProps> = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const artState = useSelector(favoArt);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await AuthService.getUserData();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const artpiece: ArtworkItemRes = route.params.item;

  const isArtInFavorites: boolean = userData?.favoArt.some(
    art => art.id === artpiece.id,
  );

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${artpiece.image_id}/full/843,/0/default.jpg`,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.infoTitles}>Name of the Piece</Text>
        <Text style={styles.title}>{artpiece.title}</Text>
        <Text style={styles.infoTitles}>Artist</Text>
        <Text style={styles.title}>{artpiece.artist_display}</Text>
        <Text style={styles.infoTitles}>Date</Text>
        <Text style={styles.title}>{artpiece.date_display}</Text>

        <Text style={styles.infoTitles}>Place of Origin</Text>
        <Text style={styles.title}>{artpiece.place_of_origin}</Text>
        <View style={styles.favContainer}>
          <Text>
            {!isArtInFavorites ? 'Fav this piece!' : 'Remove from fav!'}
          </Text>

          <TouchableOpacity
            style={styles.buttonHeart}
            onPress={() => {
              {
                !isArtInFavorites
                  ? dispatch(addArt(artpiece))
                  : dispatch(removeArt(artpiece.id));
              }

              navigation.goBack();
            }}>
            {!isArtInFavorites ? (
              <Heart
                fill={colors.secondary}
                color={colors.primary}
                width={50}
                height={50}
              />
            ) : (
              <View style={styles.XContainer}>
                <X color={colors.secondary} width={50} height={50} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {},

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHeart: {},
  image: {
    width: '100%',
    height: 600,
    marginBottom: 30,
  },
  detailsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  infoTitles: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
  favContainer: {
    flex: 1,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  XContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedDetailScreen;
