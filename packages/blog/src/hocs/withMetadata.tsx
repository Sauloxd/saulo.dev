import React from 'react';
import { Helmet } from 'react-helmet';

const withMetadata = <T extends {}>(Component: React.FC<T>) => (props: T) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Component {...props}/>
    </>
  );
};

export default withMetadata;
