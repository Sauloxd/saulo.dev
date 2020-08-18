import React from 'react';
import { Helmet } from 'react-helmet';

type WithMetadata = <T>(Component: React.FC<T>) => React.FC<T>;

const withMetadata: WithMetadata = Component => {
  return function ComponentWithMetadata (props) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <Component {...props}/>
      </>
    );
  };
};

export default withMetadata;
