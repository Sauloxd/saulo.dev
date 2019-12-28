import React from 'react';
import styled from 'styled-components';

const H2Styled = styled.h2`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px36};
  color: ${props =>
    props.theme.colors.secondary};
  margin: ${props =>
    props.theme.spaces.px0};
`;

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({
  children
}) => {
  return <H2Styled>
    {children}
  </H2Styled>;
};

export default H2;
