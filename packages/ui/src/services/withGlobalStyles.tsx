import React from 'react';
import GlobalStyles from '../theme/global';

type WithGlobalStyles = <T>(Component: React.FC<T>) => ((props: T) => React.ReactElement);

const withGlobalStyles: WithGlobalStyles = (Component) =>
  props => {
    return (
      <>
        <GlobalStyles />
        <Component {...props}/>
      </>
    );
  };

export default withGlobalStyles;
