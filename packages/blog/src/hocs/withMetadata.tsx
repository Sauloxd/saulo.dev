import React from 'react';
import { Helmet } from 'react-helmet';

const withMetadata = <T extends Record<string, any>>(Component: React.FC<T>): React.FC<T> => {
  const ComponentWithMetadata: React.FC<T> = (props) => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <Component {...props}/>
      </>
    );
  };

  return ComponentWithMetadata;
};

export default withMetadata;
