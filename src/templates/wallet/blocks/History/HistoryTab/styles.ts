import styled, { css } from 'styled-components'

type CurrencyProps = {
  side: string
}

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => css`
    background-color: ${theme.colors.componentBackground};
    box-shadow: ${theme.shadow.largeComponentShadow};
    `}
    border-radius: 0 3rem 3rem;
    padding: 2rem;

    margin-top: 1rem;
`

export const TimeAndHashWrapper = styled.div`
    font-size: 13px;
    font-family: Work Sans Medium;
    ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color :${theme.colors.normalWhite} 
    `}  ;
`

export const Hash = styled.div`
    font-weight: 500;
    font-size: 12px;
    margin-top: 0.25rem;
    color: #8BA1BE;
    font-family: Work Sans;
`

export const CurrencyWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
`

export const Image = styled.img`
    height: 1.7rem;
    width: 1.7rem;
    margin-right: 0.5rem;
`

export const Currency = styled.div<CurrencyProps>`
    font-family: Work Sans Medium;
    
    ${({ side, theme }) => css`
        color: ${side === 'AskLimit' ? theme.colors.primary : theme.colors.green}
    `}
`
