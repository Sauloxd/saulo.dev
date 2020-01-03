import React from 'react';
import { Link } from 'gatsby';
import UiNavbar from '@webshine/ui/src/components/navbar/Navbar';
import Tab from '@webshine/ui/src/components/tabs/Tab';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  :link {
    text-decoration: none;
  }
  &.active {
    ${Tab} {
      background-color: ${props => props.theme.colors.background };
    }
  }
`;

const Navbar = (props) => {
  console.log(props);
  return (
    <UiNavbar >
      <LinkStyled to="/" activeClassName="active">
        <Tab title="hello.sxd"/>
      </LinkStyled>
      <LinkStyled to="/blog" activeClassName="active">
        <Tab title="blog.sxd"/>
      </LinkStyled>
    </UiNavbar>
  );
};

export default Navbar;
