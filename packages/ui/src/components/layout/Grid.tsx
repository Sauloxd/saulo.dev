import React from 'react';
import styled from 'styled-components';

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: [row-start] 1fr [row-end];
  column-gap: 35px;
  row-gap: 0;
  height: 100%;
`;

export const Grid: React.FC<{className?: string}> = ({
  children,
  className
}) => {
  return <GridStyled className={className}>{children}</GridStyled>;
};

// @TODO Add responsiveness so this single column become fullscreen mobile/tablet
const CenterSingleColumnStyled = styled.div`
  grid-column: col-start 4 / span 6;
  grid-row: row-start / row-end;
`;

export const CenterSingleColumn: React.FC<{className?: string}> = ({ children, className }) => {
  return (
    <CenterSingleColumnStyled className={className}>
      {children}
    </CenterSingleColumnStyled>
  );
};
