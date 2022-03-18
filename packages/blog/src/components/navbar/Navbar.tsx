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
  const HelloTitle = 'hello.sxd';
  const BlogTitle = 'blog.sxd';
  const generateHandleProps =
    (tabKey: string) =>
    (props: any): any => {
      const active =
        (props.isPartiallyCurrent && tabKey != HelloTitle) ||
        (props.isCurrent && tabKey == HelloTitle);

      return {
        children: <Tab title={tabKey} active={active} />,
      };
    };

  return (
    <UiNavbar>
      <LinkStyled to="/" getProps={generateHandleProps(HelloTitle) as any} />
      <LinkStyled
        to="/blog"
        partiallyActive
        getProps={generateHandleProps(BlogTitle) as any}
      />
    </UiNavbar>
  );
};

export default withUiConfig(Navbar);
