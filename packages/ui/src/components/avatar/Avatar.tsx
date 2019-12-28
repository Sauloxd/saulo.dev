import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme/colors';
import MePng from './Me.png';

const SQRT_3 = 1.732050;

interface HexagonProps {
  size: number;
  color?: keyof typeof COLORS;
  className?: string;
  getInsidePiece?: (index: number) => React.ReactElement;
}

const HexagonContainer = styled.div<HexagonProps>`
  height: ${p => p.size}px;
  width: ${p => (p.size * SQRT_3)/2}px;
  position: relative;
`;

interface HexagonPieceProps extends HexagonProps {
  index: number;
}

const HexagonPiece = styled.div<HexagonPieceProps>`
  height: ${p => p.size/2}px;
  width: ${p => (p.size * SQRT_3)/2}px;
  position: absolute;
  background-color: ${p => p.theme.colors[p.color] || p.theme.colors.primary};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${p => `rotate(${p.index * 60}deg)`};
  overflow: hidden;
`;

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
}

const Hexagon: React.FC<HexagonProps> = ({ size, color, className, children, getInsidePiece }) => {
  return (
    <div className={className}>
      <HexagonContainer size={size}>
        <HexagonPiece size={size} index={0} color={color}>{getInsidePiece && getInsidePiece(0)}</HexagonPiece>
        <HexagonPiece size={size} index={1} color={color}>{getInsidePiece && getInsidePiece(1)}</HexagonPiece>
        <HexagonPiece size={size} index={2} color={color}>{getInsidePiece && getInsidePiece(2)}</HexagonPiece>
        {children}
      </HexagonContainer>
    </div>
  );
};

const InnerLayer = styled(Hexagon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImg = styled.img<{index: number; size: number}>`
  width: ${p => p.size * SQRT_3/2}px;
  height: ${p => p.size}px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%) ${p => `rotate(${p.index * -1 * 60}deg)`};
`;

const Avatar: React.FC<AvatarProps> = ({
  size,
  src // Only 1:1 ratio images!
}) => {
  const BORDER_WIDTH = 18;
  const getInsidePiece = (index: number): React.ReactElement => <StyledImg index={index} size={size} src={src || MePng}/>;
  return (
    <Hexagon color="primaryAccessory" size={size}>
      <InnerLayer color="primary" size={size - BORDER_WIDTH}>
        <InnerLayer color="primaryAccessory" size={size - BORDER_WIDTH - 12} getInsidePiece={getInsidePiece}/>
      </InnerLayer>
    </Hexagon>
  );
};

export default Avatar;
