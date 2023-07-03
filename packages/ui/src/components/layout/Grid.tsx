import React from 'react';
import styled from 'styled-components';

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr [content-start] 1200px [content-end] 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr [content-start] 900px [content-end] 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 24px [content-start] 1fr [content-end] 24px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 9px [content-start] 1fr [content-end] 9px;
  }
`;

export const Grid: React.FC<{className?: string, children: React.ReactNode}> = ({
  children,
  className
}) => {
  return <GridStyled className={className}>{children}</GridStyled>;
};

// @TODO Add responsiveness so this single column become fullscreen mobile/tablet
const CenterSingleColumnStyled = styled.div`
  grid-column-start: content-start;
  grid-column-end: content-end;
`;

export const CenterSingleColumn: React.FC<{className?: string, children: React.ReactNode}> = ({ children, className }) => {
  return (
    <CenterSingleColumnStyled className={className}>
      {children}
    </CenterSingleColumnStyled>
  );
};
