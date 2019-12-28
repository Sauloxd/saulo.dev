import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';

export interface IconCommonInterface {
  size?: number;
  color?: keyof typeof COLORS;
}

const wrap = <T extends IconCommonInterface>(Component: React.FC<T>)  => {
  const WrappedComponent: React.FC<T & { className?: string }> = ({ className, ...props }) => (
    <div className={className} style={{ display: 'inline-block' }}>
      <Component size={100} color={COLORS.neutral} {...props as T}/>
    </div>
  );

  return styled(WrappedComponent)``;
};

export default wrap;
