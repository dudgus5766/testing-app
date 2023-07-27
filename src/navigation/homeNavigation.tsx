import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import {HomeTabRouteNames as RouteName} from './routeNames';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName={RouteName.Home}>
      <Stack.Screen name={RouteName.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
}
