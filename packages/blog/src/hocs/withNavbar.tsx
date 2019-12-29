import React from 'react';
import Navbar from '@webshine/ui/src/components/navbar/Navbar';

const withNavbar = <T extends {}>(Component: React.FC<T>) => (props: T) => {
  return (
    <div style={{
      display: 'grid',
      rowGap: 0,
      height: '100vh',
      width: '100vw',
      gridTemplateRows: '[navbar-start] auto [navbar-end] 1fr'
    }}>
      <div style={{
        gridRow: 'navbar-start'
      }}>
        <Navbar {...props}/>
      </div>
      <div style={{
        gridRow: 'navbar-end',
        overflow: 'scroll'
      }}>
        <Component {...props}/>
      </div>
    </div>
  );
};

export default withNavbar;
