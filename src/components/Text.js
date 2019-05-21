import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
    font-size: 16px;
    color: #1a1aff;
`

export const Text =(props) =>{
    return(
        <StyledText {...props} />
    )
}