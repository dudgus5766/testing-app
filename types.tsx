import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {InvestTabRouteNames, RouteNames} from './src/navigation/routeNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
};

export type InvestTabStackParamList = {
  [InvestTabRouteNames.Home]: undefined;
  [InvestTabRouteNames.ProductDetail]: {id: number};
  [InvestTabRouteNames.Basket]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RootTabParamList = {
  [RouteNames.HomeTab]: undefined;
  [RouteNames.InvestTab]: undefined;
  [RouteNames.MyTab]: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type InvestTabScreenProps<T extends keyof InvestTabStackParamList> = {
  navigation: NativeStackNavigationProp<InvestTabStackParamList, T>;
  route: RouteProp<InvestTabStackParamList, T>;
};

// export type InvestTabScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, RouteNames.InvestTab>,
//   StackScreenProps<InvestTabStackParamList>
// >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
