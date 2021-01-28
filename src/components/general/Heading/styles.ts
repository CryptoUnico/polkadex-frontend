import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
${({ theme }) => css`
  font-size: ${theme.font.sizes.medium};
  font-weight: 500;
  color: ${theme.colors.normalWhite};
`}
`
