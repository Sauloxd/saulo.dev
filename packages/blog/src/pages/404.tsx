import React from 'react';
import withGlobalStyles from '@saulo.dev/ui/src/services/withGlobalStyles';
import withNavbar from '../hocs/withNavbar';
import {
  CenterSingleColumn,
  Grid,
} from '@saulo.dev/ui/src/components/layout/Grid';
import H1 from '@saulo.dev/ui/src/components/typography/H1';
import styled from 'styled-components';
import SpanText from '@saulo.dev/ui/src/components/typography/SpanText';

const GridStyled = styled(Grid)`
  padding: ${(p) => p.theme.spaces.px24};
`;

const NotFoundPage: React.FC = () => {
  return (
    <GridStyled>
      <CenterSingleColumn>
        <H1>Page not Found!</H1>
        <SpanText color="neutral" size="px16">
          Sorry for the inconvenience!
        </SpanText>
      </CenterSingleColumn>
    </GridStyled>
  );
};

export default withGlobalStyles(withNavbar(NotFoundPage));
