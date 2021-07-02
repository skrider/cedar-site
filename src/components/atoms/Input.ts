import styled from "styled-components";

export default styled.input<{rejected?: boolean, accepted?: boolean}>`
  height: ${p => p.theme.sizes.xl2};
  width: calc(100% - 2 * ${p => p.theme.sizes.md} + 2 * ${p => p.theme.border.width});
  border-radius: ${p => p.theme.border.radius};

  border: ${p => p.theme.border.all};
  background: ${p => p.theme.colors.foreground};
  
  padding-left: ${p => p.theme.sizes.md};
  font-size: ${p => p.theme.fontSizes.p};
  font-family: ${p => p.theme.fonts.p};

  ${p => p.rejected && `border-color: ${p.theme.colors.red}`};
  ${p => p.accepted && `border-color: ${p.theme.colors.green}`};
  
  transition: all 0.15s ease-out;

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
