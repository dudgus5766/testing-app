import React from 'react';
import {UpperStackNames} from './routeNames';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InvestDetailScreen from '../screens/Invest/investDetailScreen';
import {UpperStackParamList} from '../../types';

const Stack = createNativeStackNavigator<UpperStackParamList>();

export default function UpperStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={UpperStackNames.ProductDetail}
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen
        name={UpperStackNames.ProductDetail}
        component={InvestDetailScreen}
      />
    </Stack.Navigator>
  );
}
