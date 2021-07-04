import styled from 'styled-components';

export const Layout = styled.div`
  width: auto;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: ${p => p.theme.sizes.xl2};
  padding-left: ${p => p.theme.sizes.sm};
  padding-right: ${p => p.theme.sizes.sm};
  justify-items: center;
  `
  
export const TopFiller = styled.div`
  height: ${p => p.theme.sizes.xl4};
`

export const HeaderLayout = styled.div`
  user-select: none;
  cursor: default;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
  grid-column-gap: ${p => p.theme.sizes.xl2};
  grid-row-gap: ${p => p.theme.sizes.xl2};
  grid-auto-flow: row;
  place-items: center;
`

export const SubHeader = styled.h2`
  text-align: center;
`

export const CardLayout = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: ${p => p.theme.sizes.lg}; 
  justify-items: center;
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  min-height: 12rem;
  height: 100%;
  background: gray;
  border-radius: 1rem;
`

export const Container = styled.div`
  margin-top: 0;
  position: relative;
`
