import React from 'react';
import Tab from './Tab';

export default { title: 'ui/Tab' };

export const withDefaultTab = () => {
  return (
    <div style={{ marginTop: 60 }}>
      <Tab active={true} title="Home.sxd"/>
      <Tab active={false} title="Blog.sxd"/>
    </div>
  );
};
