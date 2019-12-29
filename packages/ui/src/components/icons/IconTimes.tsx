import React from 'react';
import wrap, { IconCommonInterface } from './iconWrap';

const IconTimes: React.FC<IconCommonInterface> = ({
  size
}) => (
  <svg width={size} height={size}  fill="none" viewBox={'0 0 9 9'} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L8 8M8 1L1 8" fill="currentColor"/>
  </svg>
);

export default wrap(IconTimes);
