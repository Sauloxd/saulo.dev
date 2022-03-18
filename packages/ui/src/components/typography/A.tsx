import React from 'react';
import styled from 'styled-components';

const AStyled = styled.a`
  text-decoration: underline;
  color: inherit;
`;

interface AProps {
  children: React.ReactNode;
}

const A: React.FC<AProps> = ({style, ...props}) => {
  return <AStyled target="_blank" rel="noopener noreferrer" {...props} />
}

export default A;
