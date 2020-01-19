import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';

export interface IconCommonInterface {
  size?: number;
  color?: keyof typeof COLORS;
}

const asLink = <T extends IconCommonInterface>(Component: any)  => {
  const IconAsAnchor = styled.a`
    cursor: pointer;
    ${Component} {
      transition: color 0.3s;
      :hover {
        color: ${p => p.theme.colors.primary};
      }
    }
  `;

  const WrappedComponent: React.FC<T & { className?: string } & AnchorHTMLAttributes<T>> = ({ className, href, ...props }) => (
    <IconAsAnchor className={className} href={href} target="_blank">
      <Component {...props as T} />
    </IconAsAnchor>
  );

  return styled(WrappedComponent)``;
};

export default asLink;
