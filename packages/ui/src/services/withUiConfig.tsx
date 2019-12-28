import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyles from '../theme/global';

type WithUiConfig = <T>(Component: React.FC<T>) => ((props: T) => React.ReactElement);

const withUiConfig: WithUiConfig = (Component) =>
  props => {
    return <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...props}/>
    </ThemeProvider>;
  };

export default withUiConfig;
