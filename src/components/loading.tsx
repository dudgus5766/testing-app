import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlexCenter} from './styles';

export default function Loading() {
  return (
    <FlexCenter>
      <ActivityIndicator
        testID="screen-loader"
        size="large"
        color="darkslateblue"
      />
    </FlexCenter>
  );
}
