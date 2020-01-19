import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

type WithUiConfig = <T>(Component: React.FC<T>) => ((props: T) => React.ReactElement);

const withUiConfig: WithUiConfig = (Component) =>
  props => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props}/>
      </ThemeProvider>
    );
  };

export default withUiConfig;
