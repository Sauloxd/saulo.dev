import React from 'react';
import styled from 'styled-components';

const wrap = (Component: React.FC)  => {
  // eslint-disable-next-line
  // @ts-ignore
  const WrappedComponent = ({ className, ...props }) =>
    <div className={className}><Component {...props}/></div>;

  return styled(WrappedComponent)``;
};

export default wrap;
