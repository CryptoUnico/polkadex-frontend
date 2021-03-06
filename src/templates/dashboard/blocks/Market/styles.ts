import styled from 'styled-components'

export const Section = styled.section`
  background: #2E303C;
  border-radius: 0 3rem 0 0 ;
  padding: 2rem 0;
  margin-left: 1rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`
export const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
`
export const WrapperActions = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  `
export const ContainerActions = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:0.5rem;
`
export const WrapperTokens = styled.div`
  max-height: 100%;
  overflow: auto;
`
export const ContainerTokensTitle = styled.div`
  display: grid;
  grid-template-columns:3fr 2fr 1fr;
  grid-column-gap:1rem;
`
export const ContainerTokens = styled.div``



