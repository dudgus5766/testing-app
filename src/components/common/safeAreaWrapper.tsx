import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Container} from '../styles';
import styled from 'styled-components';

type childrenProps = {
  children: React.ReactNode;
};

export default function SafeAreaWrapper({children}: childrenProps) {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{paddingTop: Math.max(insets.top, 24)}}>
      {children}
    </Container>
  );
}
