/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import UiNavbar from '@saulo.dev/ui/src/components/navbar/Navbar';
import Tab from '@saulo.dev/ui/src/components/tabs/Tab';
import styled from 'styled-components';
import withUiConfig from '@saulo.dev/ui/src/services/withUiConfig';

const LinkStyled = styled(Link)`
  :link {
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('');
  const generateHandleProps = (tabKey: string)=> (props: any): void => {
    if (props.isPartiallyCurrent) setActiveLink(tabKey);
  };
  const HelloTitle = 'hello.sxd';
  const BlogTitle = 'blog.sxd';

  return (
    <UiNavbar>
      <LinkStyled to="./" getProps={generateHandleProps(HelloTitle) as any}>
        <Tab title={HelloTitle} active={activeLink === HelloTitle}/>
      </LinkStyled>
      <LinkStyled to="./blog" partiallyActive getProps={generateHandleProps(BlogTitle) as any}>
        <Tab title={BlogTitle} active={activeLink === BlogTitle}/>
      </LinkStyled>
    </UiNavbar>
  );
};

export default withUiConfig(Navbar);
