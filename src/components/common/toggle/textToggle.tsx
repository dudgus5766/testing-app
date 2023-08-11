import React from 'react';
import {Pressable, Text, GestureResponderEvent} from 'react-native';
import {PressableProps} from 'react-native';
import styled from 'styled-components/native';
import useToggle from '../../../hooks/useToggle';

type TextToggleProps = PressableProps & {
  title?: string;
  style?: any;
  titleStyle?: any;
  disabled?: boolean;
};
export default function TextToggle(props: TextToggleProps) {
  const [visible, setVisible] = useToggle(false);

  return (
    <Container>
      <RoundBtnContainer
        onPress={() => setVisible(true)}
        style={props.style}
        disabled={props.disabled}>
        <RoundBtnText style={props.titleStyle}>{'토글!'}</RoundBtnText>
      </RoundBtnContainer>
      {/*<ToggleView visible={visible} style={{marginTop: 20}}>*/}
      {/*  <Text>Hello, Expand Animation!</Text>*/}
      {/*</ToggleView>*/}
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
