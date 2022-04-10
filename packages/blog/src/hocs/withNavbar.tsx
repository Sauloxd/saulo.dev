import React from 'react';
import Navbar from '../components/navbar/Navbar';

type WithNavbar = <T>(Component: React.FC<T>) => React.FC<T>;

const withNavbar: WithNavbar = (Component) => {
  return function ComponentWithNavbar(props) {
    return (
      <div
        style={{
          display: 'grid',
          rowGap: 0,
          height: '100vh',
          width: '100vw',
          gridTemplateRows:
            '[navbar-start] auto [navbar-end content-start] 1fr [content-end]',
        }}
      >
        <div
          style={{
            gridRow: 'navbar-start / navbar-end',
          }}
        >
          <Navbar />
        </div>
        <div
          style={{
            gridRow: 'content-start / content-end',
            overflow: 'auto',
          }}
        >
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default withNavbar;
