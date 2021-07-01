import styled from 'styled-components';

type LogoProps = {
  fontSize?: string;
}

export default styled.h1<LogoProps>`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: ${p => p.fontSize || '110px'};
  text-shadow: -5px -5px #AE3131, -10px -10px #7E1A1A;
  color: #D24949;
`
