import React from 'react';
import styled from 'styled-components';

const UlStyled = styled.ul`
  list-style-type: none;
`;
const Ul = ({ ...props }) => {
  return <UlStyled {...props} />;
};

export default Ul;
