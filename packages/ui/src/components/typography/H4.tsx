import React from 'react';
import styled from 'styled-components';

const H4Styled = styled.h4`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px18};
  font-weight: ${props =>
    props.theme.font.weights.medium};
  color: ${props =>
    props.theme.colors.primary};
  margin: ${props =>
    props.theme.spaces.px0};
`;

interface H4Props {
  children: React.ReactNode;
}

const H4: React.FC<H4Props> = ({
  children
}) => {
  return (
    <H4Styled>
      {children}
    </H4Styled>
  );
};

export default H4;
