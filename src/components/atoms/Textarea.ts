import styled from 'styled-components';

export default styled.textarea`
  padding: ${p => p.theme.sizes.md};
  border-radius: ${p => p.theme.border.radius};
  border: ${p => p.theme.border.all};
  width: calc(100% - 2 * (${p => p.theme.sizes.md} + ${p => p.theme.border.width}));

  height: 5.5rem;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none;

  background: ${p => p.theme.colors.foreground};
  transition: all 300ms ease-out;

  &:focus {
    border-color: ${p => p.theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
