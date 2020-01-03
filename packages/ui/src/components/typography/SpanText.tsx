import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';
import { FONT_SIZES } from '../../theme/font';

const SpanTextStyled = styled.span<SpanTextProps>`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props => props.size ? props.theme.font.sizes[props.size] : 'inherit'};
  font-weight: ${props =>
    props.theme.font.weights.retina};
  color: ${props =>
    props.theme.colors[props.color] || COLORS.neutral};
  margin: ${props =>
    props.theme.spaces.px0};
  line-height: 1.5;
`;

interface SpanTextProps {
  children: React.ReactNode;
  color?: keyof typeof COLORS;
  size?: keyof typeof FONT_SIZES;
  className?: string;
}

const SpanText: React.FC<SpanTextProps> = ({
  children,
  color,
  size,
  className
}) => {
  return (
    <SpanTextStyled color={color} size={size} className={className}>
      {children}
    </SpanTextStyled>
  );
};

export default SpanText;
