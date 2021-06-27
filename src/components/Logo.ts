import styled, { ThemedStyledComponentsModule } from 'styled-components';

type LogoProps = {
  fontSize?: string;
}

export default styled.h1<LogoProps>`
  font-family: Rounded Mplus 1c;
  font-size: ${p => p.fontSize || '110px'};
  text-shadow: -2px -2px #AE3131, -4px -4px #7E1A1A;
  color: #D24949;
`
