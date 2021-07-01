import styled from "styled-components";
import { Card } from "../../src/components/atoms";

export const CommentInput = styled(Card)`
  backdrop-filter: none;
  background: ${p => p.theme.colors.foreground};
`

export const TextArea = styled.textarea`
  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none;
`
