import React from 'react';
import styled from 'styled-components';

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 35px;
`;

export const Grid: React.FC = ({
  children
}) => {
  return <GridStyled>{children}</GridStyled>;
};

// @TODO Add responsiveness so this single column become fullscreen mobile/tablet
const CenterSingleColumnStyled = styled.div`
  grid-column: col-start 4 / span 6;
`;

export const CenterSingleColumn: React.FC = ({ children }) => {
  return (
    <CenterSingleColumnStyled>
      {children}
    </CenterSingleColumnStyled>
  );
};
