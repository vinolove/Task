import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0rem 1rem 0rem 1rem;
    margin-top: 1rem;
`

const HeaderText = styled.div`
    font-size: 1rem;
    color: #333333;
    font-weight: 500;
    flex: 1;
`

export const DataRow = ({details}) => {
    return (
        <OuterContainer>
            <HeaderText>
                {details.name}
            </HeaderText>
            <HeaderText>
                {details.username}
            </HeaderText>
            <HeaderText>
                {details.email}
            </HeaderText>
            <HeaderText>
                {details.phone}
            </HeaderText>
            <HeaderText>
                {details.website}
            </HeaderText>
        </OuterContainer>
    )
}