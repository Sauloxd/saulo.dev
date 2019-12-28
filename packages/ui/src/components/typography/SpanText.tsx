import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';

const SpanTextStyled = styled.span`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props =>
    props.theme.font.sizes.px12};
  color: ${props =>
    props.color || COLORS.neutral};
  margin: ${props =>
    props.theme.spaces.px0};
`;

interface SpanTextProps {
  children: React.ReactNode;
  color?: keyof typeof COLORS;
}

const SpanText: React.FC<SpanTextProps> = ({
  children,
  color
}) => {
  return (
    <SpanTextStyled color={COLORS[color]}>
      {children}
    </SpanTextStyled>
  );
};

export default SpanText;
