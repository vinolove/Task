import React from 'react';
import styled from 'styled-components';
import leftArrow from '../static/arrowLeft.svg';
import rightArrow from '../static/arrowRight.svg';

const StyledBox = styled.div`
    height: 50px;
    width: 50px;
    border: solid 2px #66ff99;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const LeftArrow = ({onClick,...props}) =>{
    return <StyledBox onClick={onClick} {...props}>
        <img src={leftArrow} alt="Left arrow" />
    </StyledBox>
}

export const RightArrow = ({onClick,...props}) =>{
    return <StyledBox onClick={onClick} {...props}>
        <img src={rightArrow} alt="Right arrow" />
    </StyledBox>
}