import React from 'react';
import styled from 'styled-components';

const OlStyled = styled.ol`
  list-style-type: none;
`;
const Ol = ({ ...props }) => {
  return <OlStyled {...props} />;
};

export default Ol;
