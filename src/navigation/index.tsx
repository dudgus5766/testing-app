import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, UpperStackParamList} from '../../types';
import BottomTabNavigation from './bottomTabNavigation';
import UpperStackNavigation from './UpperStackNavigation';

/**
 * [ Navigation ]
 */
export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, primary: 'red'},
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpperStack"
        component={UpperStackNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
