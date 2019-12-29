import React from 'react';
import styled from 'styled-components';
import IconSxd from '../icons/IconSxd';
import IconTimes from '../icons/IconTimes';
import SpanText from '../typography/SpanText';

interface TabWrapperProps {
  active?: boolean;
}

const TabWrapper = styled.div<TabWrapperProps>`
  background-color: ${props =>props.theme.colors.gray2};
  padding: ${p => `${p.theme.spaces.px8} ${p.theme.spaces.px12}`};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: 35px;
  min-width: 150px;
  cursor: pointer;
  text-decoration:none;

  ${IconSxd} {
    margin-right: ${p => p.theme.spaces.px6};
  }
  ${IconTimes} {
    /* transition: opacity 0.3s; */
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
  className?: string;
}

const Tab: React.FC<TabProps> = ({
  active,
  title,
  className
}) => {
  return (
    <TabWrapper active={active} className={className}>
      <IconSxd size={16}/>
      <SpanText color="neutral" size="px12">
        {title}
      </SpanText>
      <IconTimes size={12} color="neutral" />
    </TabWrapper>
  );
};

export default styled(Tab)``;
