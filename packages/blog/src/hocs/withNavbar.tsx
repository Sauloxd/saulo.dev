import React from 'react';
import Navbar from '../components/navbar/Navbar';

const withNavbar = <T extends Record<string, any>>(Component: React.FC<T>): React.FC<T> => {
  const ComponentWithNavbar = (props: T) => {
    return (
      <div style={{
        display: 'grid',
        rowGap: 0,
        height: '100vh',
        width: '100vw',
        gridTemplateRows: '[navbar-start] auto [navbar-end content-start] 1fr [content-end]'
      }}>
        <div style={{
          gridRow: 'navbar-start / navbar-end'
        }}>
          <Navbar {...props}/>
        </div>
        <div style={{
          gridRow: 'content-start / content-end',
          overflow: 'scroll'
        }}>
          <Component {...props}/>
        </div>
      </div>
    );
  };

  return ComponentWithNavbar;
};

export default withNavbar;
