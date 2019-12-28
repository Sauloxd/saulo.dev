import React from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px48};
  color: ${props =>
    props.theme.colors.primary};
`;

interface H1Props {
  children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({
  children
}) => {
  return <H1Styled>
    {children}
  </H1Styled>;
};

export default H1;
