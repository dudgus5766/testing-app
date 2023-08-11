import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      subText: string;
      background: string;
      buttonBackground: string;
      tagBackground: string;
      buttonText: string;
      tagText: string;
      productBackground: string;
      main: string;
      mainGray: string;
    };
  }
}
