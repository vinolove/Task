import React from 'react'
import styled from 'styled-components'
import ArrowDown from '../static/arrowDown.svg'
import ArrowUp from '../static/arrowUp.svg'

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

export const HeaderRow = ({onClick, sort}) => {
    return (
        <OuterContainer>
            <HeaderText>
                Name
            </HeaderText>
            <div style={{flex: 1}}>
                <HeaderText style={{display: "flex"}}>
                    User Name
                    {
                        sort ? 
                        <img style={{cursor:"pointer"}} src={ArrowUp} alt="arrow down" onClick={()=>onClick(false)} />
                        :
                        <img style={{cursor:"pointer"}} src={ArrowDown} alt="arrow up" onClick={()=>onClick(true)} />
                    }
                </HeaderText>
            </div>
            <HeaderText>
                Email
            </HeaderText>
            <HeaderText>
                Phone
            </HeaderText>
            <HeaderText>
                Website
            </HeaderText>
        </OuterContainer>
    )
}