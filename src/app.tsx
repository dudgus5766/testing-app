import React, {createContext} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import useTheme from './hooks/useTheme';
import {lightTheme, darkTheme} from './styles/theme';
import {ThemeProvider} from 'styled-components';
import Navigation from './navigation';
import 'react-native-devsettings';

const defaultValue = {
  // ThemeContext의 기본 값
  theme: 'light',
  onChangeTheme: () => {},
};
export const queryClient = new QueryClient();
export const CustomThemeContext = createContext(defaultValue);

export default function App() {
  const themeProps = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <CustomThemeContext.Provider value={themeProps}>
          <ThemeProvider
            theme={themeProps.theme === 'light' ? lightTheme : darkTheme}>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </ThemeProvider>
        </CustomThemeContext.Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
