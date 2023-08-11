import React, {useContext} from 'react';
import {Pressable} from 'react-native';
import {CustomThemeContext} from '../../app';
import {Container, Title, Text} from '../../components/styles';
import SafeAreaWrapper from '../../components/common/safeAreaWrapper';

export default function HomeScreen() {
  const {theme, onChangeTheme} = useContext(CustomThemeContext);

  return (
    <SafeAreaWrapper>
      <Title>Home Screen</Title>
      <Pressable onPress={onChangeTheme}>
        <Text> {theme === 'light' ? '🌞' : '🌕'}</Text>
      </Pressable>
    </SafeAreaWrapper>
  );
}
