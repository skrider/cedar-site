import styled from "styled-components";

export default styled.div`
  padding: ${p => p.theme.sizes.md};
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.borderWidth} solid #E4E4E4;
  backdrop-filter: blur(2px);
  width: calc(100% - 2 * (${p => p.theme.sizes.md} + ${p => p.theme.borderWidth}));
  display: grid;
`
