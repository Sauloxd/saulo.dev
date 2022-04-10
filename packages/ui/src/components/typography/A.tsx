import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AStyled = styled.a`
  text-decoration: underline;
  color: inherit;
`;

interface AProps {
  children?: React.ReactNode;
  style?: string;
}

const A: React.FC<AProps> = (props = {}) => {
  const { style, ...propsWithoutStyle } = props;
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if(ref.current) {
      ref.current.style.cssText = style
    }

  }, [ref.current])

  return (
    <AStyled
      ref={ref}
      target="_blank" rel="noopener noreferrer"
      {...propsWithoutStyle}
    />
  );
}

export default A;
