/* eslint-disable indent */
import styled from "styled-components";

type ButtonStyle = {
  invert?: boolean;
  full?: boolean;
}

export default styled.button<ButtonStyle>`
  height: ${p => p.invert ? 
    p.theme.sizes.xl2 :
    `calc(${p.theme.sizes.xl2} + 2 * ${p.theme.borderWidth})`
  };
  width: ${p => p.full? 
    p.invert ? 
    p.theme.sizes.xl2 :
    `calc(100% + 2 * ${p.theme.borderWidth})` :
    'auto'
  };
  border-radius: ${p => p.theme.borderRadius};
  
  background: ${p => p.invert ? 
    "transparent" : 
    p.theme.colors.primary
  };
  border: ${p => p.invert ?
    `${p.theme.borderWidth} solid ${p.theme.colors.secondary}` :
    "none"
  };

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
`
