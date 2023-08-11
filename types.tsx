import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RouteNames, UpperStackNames} from './src/navigation/routeNames';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  UpperStack: NavigatorScreenParams<UpperStackParamList> | undefined;
  NotFound: undefined;
};

export type UpperStackParamList = {
  [UpperStackNames.ProductDetail]: {id: number};
  [UpperStackNames.ProductInvestDetail]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type UpperStackScreenProps<T extends keyof UpperStackParamList> =
  CompositeScreenProps<
    StackScreenProps<UpperStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
