import React, {useContext} from 'react';
import {Pressable} from 'react-native';
import {CustomThemeContext} from '../../app';
import {Container, Title, Text} from '../../components/styles';

export default function HomeScreen() {
  const {theme, onChangeTheme} = useContext(CustomThemeContext);

  return (
    <Container>
      <Title>Home Screen</Title>
      <Pressable onPress={onChangeTheme}>
        <Text> {theme === 'light' ? '🌞' : '🌕'}</Text>
      </Pressable>
    </Container>
  );
}
