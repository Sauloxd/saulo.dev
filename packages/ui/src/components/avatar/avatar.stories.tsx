import React from 'react';
import Avatar from './Avatar';

export default { title: 'ui/Avatar' };

export const withDefaultNavbar = () => {
  return (
    <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
      <Avatar size={400}/>
    </div>
  );
};
