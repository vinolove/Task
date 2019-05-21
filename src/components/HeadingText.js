import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
    font-size: 2rem;
    font-color: #333333;
    font-weight: 400;
`

export const HeadingText = (props) => {
    return <StyledText {...props} />
}