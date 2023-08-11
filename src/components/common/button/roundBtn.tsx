import React from 'react';
import {Pressable, View, Text, GestureResponderEvent} from 'react-native';
import {PressableProps} from 'react-native';
import styled from 'styled-components/native';

type RoundBtnProps = PressableProps & {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: any;
  titleStyle?: any;
  disabled?: boolean;
};
export default function RoundBtn(props: RoundBtnProps) {
  return (
    <Container>
      <RoundBtnContainer
        onPress={props.onPress}
        style={props.style}
        disabled={props.disabled}>
        <RoundBtnText style={props.titleStyle}>{props.title}</RoundBtnText>
      </RoundBtnContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const RoundBtnContainer = styled(Pressable)`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.color?.buttonBackground};
`;
const RoundBtnText = styled(Text)`
  font-size: 14px;
  padding-vertical: 9px;
  padding-horizontal: 18px;
  color: ${props => props.theme.color?.buttonText};
`;
