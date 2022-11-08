import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../contexts/ThemeContext';

// screens
import Home from '../screens/Home';
import Details from '../screens/Details';

import { colors } from '../config/theme';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          paddingLeft: 10,
        },
        headerStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerTintColor: activeColors.tint,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
