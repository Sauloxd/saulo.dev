import React from 'react';
import Navbar from './Navbar';

export default { title: 'ui/Navbar' };

export const withDefaultNavbar = () => {
  return (
    <div style={{ marginTop: 60 }}>
      <Navbar>
        <div>
            Oi
        </div>
      </Navbar>
    </div>
  );
};
