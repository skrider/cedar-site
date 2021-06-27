import styled from "styled-components";

export default styled.div`
  padding: ${p => p.theme.sizes.md};
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.borderWidth} solid ${p => p.theme.colors.content};
  background: ${p => p.theme.colors.background};
  width: 100%;
`
