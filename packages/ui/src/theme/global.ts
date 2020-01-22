import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${props => props.theme.font.family.primary};
    background-color: ${props =>
    props.theme.colors.background};
    margin: ${p => p.theme.spaces.px0};
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 900px) {
    html, body {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    html, body {
      font-size: 13px;
    }
  }
`;

export default GlobalStyles;
