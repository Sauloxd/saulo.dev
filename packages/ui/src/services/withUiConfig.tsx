import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

type WithUiConfig = <T>(Component: React.FC<T>) => React.FC<T>;

const withUiConfig: WithUiConfig = (Component) => {
  return function ComponentWithUiConfig(props) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props}/>
      </ThemeProvider>
    );
  };
};

export default withUiConfig;
