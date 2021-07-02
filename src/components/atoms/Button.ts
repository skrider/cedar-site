/* eslint-disable indent */
import styled from "styled-components";

type ButtonStyle = {
  invert?: boolean;
  full?: boolean;
}

const boxOffset : string = "3px";

export default styled.button<ButtonStyle>`
  height: ${p => p.invert ? 
    p.theme.sizes.xl2 :
    `calc(${p.theme.sizes.xl2} + 2 * ${p.theme.border.width})`
  };
  width: ${p => p.full? 
    p.invert ? 
    p.theme.sizes.xl2 :
    `calc(100% + 2 * ${p.theme.border.width})` :
    'auto'
  };
  border-radius: ${p => p.theme.border.radius};
  
  background: ${p => p.invert ? 
    "transparent" : 
    p.theme.colors.primary
  };
  border: ${p => p.invert ?
    `${p.theme.border.width} solid ${p.theme.colors.secondary}` :
    "none"
  };

  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  padding-right: ${p => p.theme.sizes.md};
  padding-left: ${p => p.theme.sizes.md};

  font-size: ${p => p.theme.fontSizes.p};
  font-weight: bold;
  font-family: ${p => p.theme.fonts.p};
  color: ${p => p.invert ? 
    p.theme.colors.secondary : 
    p.theme.colors.foreground
  };
  user-select: none;
  cursor: pointer;

  transition: all 0.3s ease-out;
  
  &:hover:enabled {
    background: ${p => p.invert ? 
      p.theme.colors.primaryHighlight : 
      p.theme.colors.primaryHighlight
    };
  }

  &:active:enabled {
  }

  &:focus:enabled {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &>* {
    font: inherit;
    color: inherit;
    margin-left: auto;
  }
  
  &>*:first-child {
    margin-right: auto;
  }

  &::after {
    --box-offset: 3px;
    position: absolute;
    right: calc(-1 * var(--box-offset));
    top: calc(-1 * var(--box-offset));
    width: calc(100% + 2 * var(--box-offset));
    height: calc(100% + 2 * var(--box-offset));
    content: " ";
    z-index: -1;
    background: ${p => p.theme.colors.secondary};
    border-radius: calc(${p => p.theme.border.radius} + var(--box-offset));
    opacity: 0;
    transition: all 300ms ease-out;
  }

  &:focus::after {
    opacity: 0.7;
  }

  &:active::after {
    --box-offset: 4px;
    opacity: 0.7;
  }
`
