import React from 'react';
import Navbar from './Navbar';
import Tab from '../tabs/Tab';

export default { title: 'ui/Navbar' };

export const withDefaultNavbar = () => {
  return (
    <Navbar >
      <Tab active title="hello.sxd"/>
      <Tab title="blog.sxd"/>
    </Navbar>
  );
};
