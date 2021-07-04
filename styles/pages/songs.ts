import styled from "styled-components";
import { Card } from "../../src/components/atoms";

export const SongImage = styled.img`
  place-self: center;
  width: 105%;
  height: 105%;
  border-radius: ${p => p.theme.border.radius} 0 0 ${p => p.theme.border.radius};
`

export const SongCard = styled(Card)`
  padding: 0;
  border: none;
  width: 100%;
  
  grid-template-columns: ${p => p.theme.sizes.xl4} 1fr;
  grid-template-rows: ${p => p.theme.sizes.xl4};
  place-items: center stretch;
`
  
export const SongTitle = styled.p`
  font-weight: bold;
`

export const SongHeader = styled.div`
  height: 100%;

  border-top: ${p => p.theme.border.all};
  border-bottom: ${p => p.theme.border.all};
  border-right: ${p => p.theme.border.all};
  border-radius: 0 ${p => p.theme.border.radius} ${p => p.theme.border.radius} 0;
  display: grid;
  place-items: center start;
  padding-left: ${p => p.theme.sizes.lg};
`
