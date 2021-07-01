import styled from "styled-components";

export const InputDiv = styled.div<{placeholder: string}>`
  font: inherit;
  width: 100%;
  height: 100%;
  -webkit-writing-mode: sideways-rl !important;
  -webkit-rtl-ordering: logical;

  &:empty::before {
    content: "${p => p.placeholder}";
  }
  `
