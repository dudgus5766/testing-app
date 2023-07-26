import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../types';
import {RouteNames} from './routeNames';
import {CustomThemeContext} from '../app';
import {lightTheme, darkTheme} from '../styles/theme';

import HomeTabScreen from '../screens/Home';
import MyScreen from '../screens/My';
import InvestScreen from '../screens/Invest';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const {theme} = useContext(CustomThemeContext);
  const isDarkMode = theme === 'dark';

  return (
    <BottomTab.Navigator
      initialRouteName={RouteNames.HomeTab}
      screenOptions={{
        tabBarActiveTintColor: isDarkMode
          ? darkTheme.color.main
          : lightTheme.color.main,
        headerStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.color.background
            : lightTheme.color.background,
        },
        headerTitleStyle: {
          color: isDarkMode ? darkTheme.color.text : lightTheme.color.text,
        },
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.color.background
            : lightTheme.color.background,
        },
      }}>
      <BottomTab.Screen
        name={RouteNames.HomeTab}
        component={HomeTabScreen}
        options={{
          tabBarLabel: RouteNames.HomeTab,
        }}
      />
      <BottomTab.Screen
        name={RouteNames.InvestTab}
        component={InvestScreen}
        options={{
          tabBarLabel: RouteNames.InvestTab,
        }}
      />
      <BottomTab.Screen
        name={RouteNames.MyTab}
        component={MyScreen}
        options={{
          tabBarLabel: RouteNames.MyTab,
        }}
      />
    </BottomTab.Navigator>
  );
}
