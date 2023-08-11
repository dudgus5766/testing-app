import {DefaultTheme} from 'styled-components';

export const lightTheme: DefaultTheme = {
  color: {
    text: '#2b2b2b',
    subText: '#9A99A0',
    background: '#ebebeb',
    buttonBackground: '#000000',
    tagBackground: '#191919',
    buttonText: '#FFFFFF',
    tagText: '#FFFFFF',
    productBackground: '#fefefe',
    main: '#5c9aff',
    mainGray: '#252529',
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    ...lightTheme.color,
    text: '#fefefe',
    subText: '#9A99A0',
    background: '#0E0E0E',
    buttonBackground: '#FFFFFF',
    tagBackground: '#191919',
    buttonText: '#000000',
    tagText: '#FFFFFF',
    productBackground: '#252529',
    mainGray: '#252529',
  },
};
