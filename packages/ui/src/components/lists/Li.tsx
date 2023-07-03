import React from 'react';
import SpanText from '../typography/SpanText';

const Li: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
  return (
    <li {...props}>
      <SpanText color="primary" size="px16" fontWeight='bold'>
        {'- '}
      </SpanText>
      <SpanText color="neutral" size="px16">
        {children}
      </SpanText>
    </li>
  )
}

export default Li
