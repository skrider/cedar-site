import React, {useContext} from 'react';
import Store from '../store';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

const BackgroundFill = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -3;
  background: ${p => p.theme.colors.background};
`

const Canvas = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  top: 0;
  z-index: -2;
`

const BackgroundFilter = styled.div`
  display: none;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(2px);
  z-index: -1;
`

const dist = [
  ["220","620", "-20"],
  ["20", "300", "15"],
  ["230","780", "20"],
  ["90", "20", "-5"],
  ["350","500", "-12"],
  ["375","200", "5"],
  ["300","80", "7"],
  ["450","850", "0"],
  ["50", "800", "-12"],
  ["230","375", "-20"],
  ["70", "450", "-16"]
]

const chillIcons = [
  'bg/cocktail.svg',
  'bg/coding.svg',
  'bg/gear.svg',
  'bg/lights.svg',
  'bg/robot.svg',
  'bg/solocup.svg',
  'bg/smirney.svg',
  'bg/pingpong.svg',
  'bg/mountain.svg',
  'bg/speaker.svg',
  'bg/weed.svg',
]

const partyIcons = chillIcons;

const safeIcons = chillIcons;

const Background : React.FC = () => {
  const {sizes} = useContext(ThemeContext);
  const {appState : {mode}} = useContext(Store);

  let icons : string[];
  
  switch (mode) {
    case "party":
      icons = partyIcons;
    case "safe":
      icons = safeIcons;
    default:
      icons = chillIcons;
  }

  // Pain:
  // (?<=y=\{dist\[(\d+)\]\[\d\]\}\s)
  // transform={`rotate(${dist$1[2]}, ${dist$1[0]}, ${dist$1[1]})`} 

  return (
    <>
      <BackgroundFill/>
      <Canvas width="100%" height="100%">
        <defs>
          <pattern id="icons-col1" x="0" y="0" width="500" height="1000" patternUnits="userSpaceOnUse">
            <image href={icons[0]} x={dist[0][0]} y={dist[0][1]} transform={`rotate(${dist[0][2]}, ${dist[0][0]}, ${dist[0][1]})`} height={sizes.xl5}/>
            <image href={icons[1]} x={dist[1][0]} y={dist[1][1]} transform={`rotate(${dist[1][2]}, ${dist[1][0]}, ${dist[1][1]})`} height={sizes.xl5}/>
            <image href={icons[2]} x={dist[2][0]} y={dist[2][1]} transform={`rotate(${dist[2][2]}, ${dist[2][0]}, ${dist[2][1]})`} height={sizes.xl5}/>
            <image href={icons[3]} x={dist[3][0]} y={dist[3][1]} transform={`rotate(${dist[3][2]}, ${dist[3][0]}, ${dist[3][1]})`} height={sizes.xl5}/>
            <image href={icons[4]} x={dist[4][0]} y={dist[4][1]} transform={`rotate(${dist[4][2]}, ${dist[4][0]}, ${dist[4][1]})`} height={sizes.xl5}/>
            <image href={icons[5]} x={dist[6][0]} y={dist[6][1]} transform={`rotate(${dist[6][2]}, ${dist[6][0]}, ${dist[6][1]})`} height={sizes.xl5}/>
            <image href={icons[6]} x={dist[5][0]} y={dist[5][1]} transform={`rotate(${dist[5][2]}, ${dist[5][0]}, ${dist[5][1]})`} height={sizes.xl5}/>
            <image href={icons[7]} x={dist[7][0]} y={dist[7][1]} transform={`rotate(${dist[7][2]}, ${dist[7][0]}, ${dist[7][1]})`} height={sizes.xl5}/>
            <image href={icons[8]} x={dist[8][0]} y={dist[8][1]} transform={`rotate(${dist[8][2]}, ${dist[8][0]}, ${dist[8][1]})`} height={sizes.xl5}/>
            <image href={icons[9]} x={dist[9][0]} y={dist[9][1]} transform={`rotate(${dist[9][2]}, ${dist[9][0]}, ${dist[9][1]})`} height={sizes.xl5}/>
            <image href={icons[10]} x={dist[10][0]} y={dist[10][1]} transform={`rotate(${dist[10][2]}, ${dist[10][0]}, ${dist[10][1]})`} height={sizes.xl5}/>
          </pattern>
          <pattern id="icons-col2" x="0" y="0" width="500" height="1000" patternUnits="userSpaceOnUse">
            <image href={icons[0]} x={dist[4][0]} y={dist[4][1]} transform={`rotate(${dist[4][2]}, ${dist[4][0]}, ${dist[4][1]})`} height={sizes.xl5}/>
            <image href={icons[1]} x={dist[5][0]} y={dist[5][1]} transform={`rotate(${dist[5][2]}, ${dist[5][0]}, ${dist[5][1]})`} height={sizes.xl5}/>
            <image href={icons[2]} x={dist[7][0]} y={dist[7][1]} transform={`rotate(${dist[7][2]}, ${dist[7][0]}, ${dist[7][1]})`} height={sizes.xl5}/>
            <image href={icons[3]} x={dist[2][0]} y={dist[2][1]} transform={`rotate(${dist[2][2]}, ${dist[2][0]}, ${dist[2][1]})`} height={sizes.xl5}/>
            <image href={icons[4]} x={dist[9][0]} y={dist[9][1]} transform={`rotate(${dist[9][2]}, ${dist[9][0]}, ${dist[9][1]})`} height={sizes.xl5}/>
            <image href={icons[5]} x={dist[6][0]} y={dist[6][1]} transform={`rotate(${dist[6][2]}, ${dist[6][0]}, ${dist[6][1]})`} height={sizes.xl5}/>
            <image href={icons[6]} x={dist[8][0]} y={dist[8][1]} transform={`rotate(${dist[8][2]}, ${dist[8][0]}, ${dist[8][1]})`} height={sizes.xl5}/>
            <image href={icons[7]} x={dist[10][0]} y={dist[10][1]} transform={`rotate(${dist[10][2]}, ${dist[10][0]}, ${dist[10][1]})`} height={sizes.xl5}/>
            <image href={icons[8]} x={dist[1][0]} y={dist[1][1]} transform={`rotate(${dist[1][2]}, ${dist[1][0]}, ${dist[1][1]})`} height={sizes.xl5}/>
            <image href={icons[9]} x={dist[3][0]} y={dist[3][1]} transform={`rotate(${dist[3][2]}, ${dist[3][0]}, ${dist[3][1]})`} height={sizes.xl5}/>
            <image href={icons[10]} x={dist[0][0]} y={dist[0][1]} transform={`rotate(${dist[0][2]}, ${dist[0][0]}, ${dist[0][1]})`} height={sizes.xl5}/>
          </pattern>
          <pattern id="icons-col3" x="0" y="0" width="500" height="1000" patternUnits="userSpaceOnUse">
            <image href={icons[0]} x={dist[10][0]} y={dist[10][1]} transform={`rotate(${dist[10][2]}, ${dist[10][0]}, ${dist[10][1]})`} height={sizes.xl5}/>
            <image href={icons[1]} x={dist[0][0]} y={dist[0][1]} transform={`rotate(${dist[0][2]}, ${dist[0][0]}, ${dist[0][1]})`} height={sizes.xl5}/>
            <image href={icons[2]} x={dist[2][0]} y={dist[2][1]} transform={`rotate(${dist[2][2]}, ${dist[2][0]}, ${dist[2][1]})`} height={sizes.xl5}/>
            <image href={icons[3]} x={dist[1][0]} y={dist[1][1]} transform={`rotate(${dist[1][2]}, ${dist[1][0]}, ${dist[1][1]})`} height={sizes.xl5}/>
            <image href={icons[4]} x={dist[4][0]} y={dist[4][1]} transform={`rotate(${dist[4][2]}, ${dist[4][0]}, ${dist[4][1]})`} height={sizes.xl5}/>
            <image href={icons[5]} x={dist[8][0]} y={dist[8][1]} transform={`rotate(${dist[8][2]}, ${dist[8][0]}, ${dist[8][1]})`} height={sizes.xl5}/>
            <image href={icons[6]} x={dist[6][0]} y={dist[6][1]} transform={`rotate(${dist[6][2]}, ${dist[6][0]}, ${dist[6][1]})`} height={sizes.xl5}/>
            <image href={icons[7]} x={dist[3][0]} y={dist[3][1]} transform={`rotate(${dist[3][2]}, ${dist[3][0]}, ${dist[3][1]})`} height={sizes.xl5}/>
            <image href={icons[8]} x={dist[9][0]} y={dist[9][1]} transform={`rotate(${dist[9][2]}, ${dist[9][0]}, ${dist[9][1]})`} height={sizes.xl5}/>
            <image href={icons[9]} x={dist[5][0]} y={dist[5][1]} transform={`rotate(${dist[5][2]}, ${dist[5][0]}, ${dist[5][1]})`} height={sizes.xl5}/>
            <image href={icons[10]} x={dist[7][0]} y={dist[7][1]} transform={`rotate(${dist[7][2]}, ${dist[7][0]}, ${dist[7][1]})`} height={sizes.xl5}/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="500" height="100%" fill="url(#icons-col1)"></rect>
        <rect x="500" y="0" width="500" height="100%" fill="url(#icons-col2)"></rect>
        <rect x="1000" y="0" width="500" height="100%" fill="url(#icons-col3)"></rect>
      </Canvas>
      <BackgroundFilter />
    </>
  )
}

export default Background;
