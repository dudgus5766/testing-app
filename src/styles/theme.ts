import {DefaultTheme} from 'styled-components';

export const lightTheme: DefaultTheme = {
  color: {
    text: '#2b2b2b',
    background: '#ebebeb',
    productBackground: '#fefefe',
    main: '#5c9aff',
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    ...lightTheme.color,
    text: '#fefefe',
    background: '#2b2b2b',
    productBackground: '#3d3d3d',
  },
};
