import React from 'react';
import styled from 'styled-components';
import MePng from './Me.png';
import Hexagon from '../hexagon/Hexagon';

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
}

const StyledImg = styled.img<{index: number; size: number}>`
  width: ${p => p.size * Math.sqrt(3)/2}px;
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
  const getInsidePiece = (index: number): React.ReactElement => <StyledImg index={index} size={size} src={src || MePng}/>;
  return (
    <Hexagon layers={['primaryAccessory', 'primary', {
      color: 'primaryAccessory',
      innerPiece: getInsidePiece
    }]} size={size}/>
  );
};

export default Avatar;
