import React from 'react';
import styled from 'styled-components';

const H3Styled = styled.h3`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px24};
  font-weight: ${props =>
    props.theme.font.weights.medium};
  color: ${props =>
    props.theme.colors.secondaryAccessory};
  margin: ${props =>
    props.theme.spaces.px0};
`;

interface H3Props {
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({
  children
}) => {
  return (
    <H3Styled>
      {children}
    </H3Styled>
  );
};

export default H3;
