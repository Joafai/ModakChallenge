import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../screens/FeedScreen';
import Fav from '../screens/FavArtScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';

const FeedStack = createStackNavigator();
const FavStack = createStackNavigator();

const FeedNavigator: React.FC = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{headerTitle: 'Gallery'}}
      />
      <FeedStack.Screen
        options={{headerTitle: 'Art Details'}}
        name="FeedDetails"
        component={FeedDetailScreen}
      />
    </FeedStack.Navigator>
  );
};

const FavNavigator: React.FC = () => {
  return (
    <FavStack.Navigator>
      <FavStack.Screen
        name="Fav"
        component={Fav}
        options={{headerTitle: 'Favorite art'}}
      />
      <FavStack.Screen
        options={{headerTitle: 'Favorite art detail'}}
        name="FeedDetailsFav"
        component={FeedDetailScreen}
      />
    </FavStack.Navigator>
  );
};

export {FeedNavigator, FavNavigator};
