import React from 'react';
import styled from 'styled-components';
import IconSxd from '../icons/IconSxd';
import IconTimes from '../icons/IconTimes';
import SpanText from '../typography/SpanText';

interface TabWrapperProps {
  active?: boolean;
}

const TabWrapper = styled.a<TabWrapperProps>`
  background-color: ${props => props.active ? props.theme.colors.background : props.theme.colors.gray2};
  padding: ${p => `${p.theme.spaces.px8} ${p.theme.spaces.px12}`};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: 35px;
  min-width: 150px;
  cursor: pointer;
  ${IconSxd} {
    margin-right: ${p => p.theme.spaces.px6};
  }
  ${IconTimes} {
    transition: opacity 0.3s;
    margin-left: auto;
    opacity: ${props => props.active ? '1' : '0'};
  }
  :hover {
    ${IconTimes} {
      opacity: 1;
    }
  }
`;

interface TabProps extends TabWrapperProps {
  title: string;
}

const Tab: React.FC<TabProps> = ({
  active,
  title
}) => {
  return (
    <TabWrapper active={active}>
      <IconSxd />
      <SpanText color="neutral">
        {title}
      </SpanText>
      <IconTimes />
    </TabWrapper>
  );
};

export default Tab;
