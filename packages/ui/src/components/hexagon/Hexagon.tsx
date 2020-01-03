import React from 'react';
import styled from 'styled-components';
import { ColorKeys } from '../../theme/colors';

type Layer = { color: ColorKeys; innerPiece?: (index: number) => React.ReactElement; border?: number };

interface HexagonProps {
  size: number;
  layers?: (ColorKeys | Layer)[];
  className?: string;
  getInsidePiece?: (index: number) => React.ReactElement;
}

const HexagonContainer = styled.div<HexagonProps>`
  height: ${p => p.size}px;
  width: ${p => (p.size * Math.sqrt(3))/2}px;
  position: relative;
`;

interface HexagonPieceProps {
  index: number;
  color: ColorKeys;
  size: number;
}

const HexagonPiece = styled.div<HexagonPieceProps>`
  height: ${p => p.size/2}px;
  width: ${p => (p.size * Math.sqrt(3))/2}px;
  position: absolute;
  background-color: ${p => p.theme.colors[p.color] || p.theme.colors.primary};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${p => `rotate(${p.index * 60}deg)`};
  overflow: hidden;
`;

const Hexagon: React.FC<HexagonProps> = ({ size, layers, className }) => {
  const defaultLayer = { color: layers[0], innerPiece: (): null => null, border: 18 };
  const { color, innerPiece } = typeof layers[0] === 'object' ? { ...defaultLayer, ...layers[0] } : defaultLayer;
  return (
    <div className={className}>
      <HexagonContainer size={size}>
        <HexagonPiece size={size} index={0} color={color as ColorKeys}>{innerPiece(0)}</HexagonPiece>
        <HexagonPiece size={size} index={1} color={color as ColorKeys}>{innerPiece(1)}</HexagonPiece>
        <HexagonPiece size={size} index={2} color={color as ColorKeys}>{innerPiece(2)}</HexagonPiece>
        {layers[1] && <InnerLayer
          size={size - ((layers[1] as Layer).border || 18)}
          layers={layers.slice(1)}
        />}
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

export default Hexagon;
