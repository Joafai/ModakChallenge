import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';

import Text from './Text';
import colors from '../config/colors';

interface CardProps {
  title: string;
  artist: string;
  date: string;
  imageUrl: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  artist,
  date,
  imageUrl,
  onPress,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.date} numberOfLines={1}>
          {date}
        </Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: colors.primary,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.light,
  },
  artist: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: colors.light,
  },
});

export default Card;
