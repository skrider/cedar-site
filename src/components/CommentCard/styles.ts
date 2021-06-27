import Card from "../atoms/Card";
import styled from "styled-components";

export const CommentCardContainer = styled(Card)`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: ${p => p.theme.sizes.md};
`

export const CommentCardHeader = styled.p`
  font-weight: bold;
`

export const CommentCardDate = styled.b`
  opacity: 20%;
`
