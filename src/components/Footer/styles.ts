import styled from "styled-components";

export const FooterLayout = styled.div`
  display: grid;
  grid-auto-fill: row;
  grid-row-gap: ${p => p.theme.sizes.md};
  margin-bottom: ${p => p.theme.sizes.xl2};
  place-items: center;
`
