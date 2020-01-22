import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, CenterSingleColumn } from '../layout/Grid';
import theme from '../../theme';

const NavbarStyled = styled.div`
  background-color: ${props=> props.theme.colors.gray3};
  min-height: 35px;
`;

const CenterSingleColumnStyled = styled(CenterSingleColumn)`
  display: flex;
`;

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  children
}) =>
  (
    <ThemeProvider theme={theme}>
      <NavbarStyled className={className}>
        <Grid>
          <CenterSingleColumnStyled>
            {children}
          </CenterSingleColumnStyled>
        </Grid>
      </NavbarStyled>
    </ThemeProvider>
  );

export default Navbar;
