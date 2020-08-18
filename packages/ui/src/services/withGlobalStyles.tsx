import React from 'react';
import GlobalStyles from '../theme/global';

type WithGlobalStyles = <T>(Component: React.FC<T>) => React.FC<T>;

const withGlobalStyles: WithGlobalStyles = (Component) => {
  return function WithGlobalStyles(props) {
    return (
      <>
        <GlobalStyles />
        <Component {...props}/>
      </>
    );
  };
};

export default withGlobalStyles;
