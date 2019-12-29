import React from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';
import styled from 'styled-components';
import withNavbar from '../hocs/withNavbar';
import H1 from '@webshine/ui/src/components/typography/H1';

const GridStyled = styled(Grid)`
  padding: ${p => p.theme.spaces.px24};
`;

const BlogPage: React.FC = () => {
  return (
    <GridStyled>
      <CenterSingleColumn>
        <H1>
        A place to reflect
        </H1>
      </CenterSingleColumn>
    </GridStyled>
  );
};

export default withUiConfig(withNavbar(BlogPage));
