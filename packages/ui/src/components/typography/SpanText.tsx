import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';
import { FONT_SIZES, FONT_WEIGHTS } from '../../theme/font';

const SpanTextStyled = styled.span<SpanTextProps>`
  font-family: ${props =>
    props.theme.font.family.primary};
  font-size: ${props => props.size && props.theme.font.sizes[props.size]};
  font-weight: ${props =>
    props.theme.font.weights[props.fontWeight] || props.theme.font.weights.retina};
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
  fontWeight?: keyof typeof FONT_WEIGHTS;
  className?: string;
  style?: string;
}

const SpanText: React.FC<SpanTextProps> = ({
  children,
  color,
  size,
  className,
  fontWeight,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if(ref.current) {
      ref.current.style.cssText = style
    }

  }, [ref.current])
  return (
    <SpanTextStyled ref={ref} color={color} size={size} className={className} fontWeight={fontWeight} {...rest}>
      {children}
    </SpanTextStyled>
  );
};

export default SpanText;
