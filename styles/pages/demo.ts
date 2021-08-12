import styled from 'styled-components'

export const DoubleGridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const GridContainer = styled.div<{rows: number, columns: number, embellished?: boolean}>`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, 1fr);
  grid-template-rows: repeat(${p => p.rows}, 1fr);
  grid-auto-flow: column;
  place-items: center;

  &::before {
    content: "";
  }

  & * {
    user-select: none;
  }
`

export const DumbGridTile = styled.div<{toggled: boolean}>`
  width: 3rem;
  height: max(1rem, 100%);
  background: ${p => p.toggled ? p.theme.colors.secondary : 'transparent'};
  ${p => p.toggled ? 'opacity: 0.4;' : ''} 
  border: 1px solid ${p => p.theme.colors.content};
`
