import styled from "styled-components";

export default styled.input<{rejected?: boolean, accepted?: boolean}>`
  height: ${p => p.theme.sizes.xl2};
  width: calc(100% - ${p => p.theme.sizes.md});
  border-radius: ${p => p.theme.borderRadius};

  border: ${p => p.theme.borderWidth} solid ${p => p.theme.colors.content};
  background: ${p => p.theme.colors.foreground};
  
  padding-left: ${p => p.theme.sizes.md};
  font-size: ${p => p.theme.fontSizes.p};
  font-family: ${p => p.theme.fonts.p};

  ${p => p.rejected && `border-color: ${p.theme.colors.red}`};
  ${p => p.accepted && `border-color: ${p.theme.colors.green}`};
  
  transition: all 0.15s ease-out;

  &:focus {
    outline: none;
    transform: scale(1.01, 1.01);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
