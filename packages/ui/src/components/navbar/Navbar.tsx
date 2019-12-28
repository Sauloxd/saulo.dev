import React from 'react';
import styled from 'styled-components';
import { Grid, CenterSingleColumn } from '../layout/Grid';

const NavbarStyled = styled.div`
  background-color: ${props=>
    props.theme.colors.gray3};
  min-height: 35px;
`;

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  children
}) =>
  (
    <NavbarStyled className={className}>
      <Grid>
        <CenterSingleColumn>
          {children}
        </CenterSingleColumn>
      </Grid>
    </NavbarStyled>
  );

export default Navbar;
