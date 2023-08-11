import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BasketIcon from '../components/basket-icon';
import CloseIcon from '../components/close-icon';
// import {useProductsInBasketCount} from '../store/product';
import {InvestTabRouteNames} from './routeNames';
import InvestScreen from '../screens/Invest';
import {InvestTabStackParamList} from '../../types';
import InvestDetailScreen from '../screens/Invest/investDetailScreen';

const Stack = createNativeStackNavigator<InvestTabStackParamList>();

export default function InvestNavigation() {
  // const favoritedProductsCount = useProductsInBasketCount();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName={InvestTabRouteNames.Home}>
      <Stack.Screen name={InvestTabRouteNames.Home} component={InvestScreen} />

      {/*<Stack.Screen*/}
      {/*  options={{*/}
      {/*    headerTitle: 'Loading...',*/}
      {/*  }}*/}
      {/*  name={RouteNames.productDetail}*/}
      {/*  component={ProductDetailScreen as React.ComponentType}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  options={({navigation}) => ({*/}
      {/*    animation: 'fade_from_bottom',*/}
      {/*    headerTitle: 'Basket',*/}
      {/*    // Back button subview is not yet Fabric compatible in react-native-screens*/}
      {/*    headerLeft: headerLeftProps => (*/}
      {/*      <HeaderBackButton*/}
      {/*        {...headerLeftProps}*/}
      {/*        testID="basket-screen-header-left-btn"*/}
      {/*        backImage={({tintColor}) => (*/}
      {/*          <CloseIcon onPress={navigation.goBack} color={tintColor} />*/}
      {/*        )}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*  name={RouteNames.basket}*/}
      {/*  component={BasketScreen as React.ComponentType}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
}
