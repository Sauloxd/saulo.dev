import styled from 'styled-components';
import { Grid } from '@saulo.dev/ui/src/components/layout/Grid';
import H1 from '@saulo.dev/ui/src/components/typography/H1';

export const GridStyled = styled(Grid)`
  padding: ${(p) => p.theme.spaces.px24};
`;
export const PageTitle = styled(H1)`
  margin-bottom: 0;
`;
export const PostContainer = styled.div`
  margin-top: ${(p) => p.theme.spaces.px24};
  margin-bottom: ${(p) => p.theme.spaces.px36};
`;
