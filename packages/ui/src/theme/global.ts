import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props =>
    props.theme.font.family.primary};
    background-color: ${props =>
    props.theme.colors.background};
  }
`;

export default GlobalStyles;
