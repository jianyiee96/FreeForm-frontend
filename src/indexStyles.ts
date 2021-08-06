import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './styles/Theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
	  font-size: calc(10px + 1vmin);
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.fontColors.secondary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
