import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';

export interface IconCommonInterface {
  size?: number;
  color?: keyof typeof COLORS;
}

const IconWrapper = styled.div`
  display: 'inline-block';
  line-height: 0;
  color: ${p => p.color};
`;

const wrap = <T extends IconCommonInterface>(Component: React.FC<T>)  => {
  const WrappedComponent: React.FC<T & { className?: string }> = ({ className, ...props }) => (
    <IconWrapper className={className} color={COLORS[props.color] || COLORS.neutral}>
      <Component size={100} {...props as T} />
    </IconWrapper>
  );

  return styled(WrappedComponent)``;
};

export default wrap;
