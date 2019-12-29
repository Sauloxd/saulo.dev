import React from 'react';
import styled from 'styled-components';

const BodyTextStyled = styled.span`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px16};
  font-weight: ${props =>
    props.theme.font.weights.retina};
  color: ${props =>
    props.theme.colors.neutral};
  margin: ${props =>
    props.theme.spaces.px0};
`;

interface BodyTextProps {
  children: React.ReactNode;
}

const BodyText: React.FC<BodyTextProps> = ({
  children
}) => {
  return (
    <BodyTextStyled>
      {children}
    </BodyTextStyled>
  );
};

export default BodyText;
