import React from 'react';
import 'jest-styled-components';
import {ThemeProvider} from 'styled-components';
import {render} from '@testing-library/react-native';
import {lightTheme} from '../styles/theme';

type childrenProps = {
  children: React.ReactNode;
};

const Wrapper = ({children}: childrenProps) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

const renderWithStyledComponent = (ui: any, options: any) =>
  render(ui, {wrapper: Wrapper, ...options});

export * from '@testing-library/react-native';

export {renderWithStyledComponent as render};
