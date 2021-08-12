import styled from 'styled-components'

export const FormLayout = styled.form`
width: 100%;
display: grid;
grid-auto-flow: row;
grid-row-gap: ${p => p.theme.sizes.lg}; 
justify-items: center;
`
