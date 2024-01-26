import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavNavigator, FeedNavigator} from './StackNavigation';
import {Heart, Home} from 'react-native-feather';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.light,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Home color={color} />,
        }}
        name="Feed"
        component={FeedNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Heart color={color} />,
        }}
        name="Fav"
        component={FavNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
