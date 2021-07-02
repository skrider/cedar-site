import styled from "styled-components";

export default styled.div`
  padding: ${p => p.theme.sizes.md};
  border-radius: ${p => p.theme.border.radius};
  border: ${p => p.theme.border.all};
  backdrop-filter: blur(2px);
  width: calc(100% - 2 * (${p => p.theme.sizes.md} + ${p => p.theme.border.width}));
  display: grid;
`
