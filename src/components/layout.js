import React from "react"
import styled from "styled-components"

function Layout ({children})  {

    return (
        <Wrapper>
            <h1>This is my blog</h1>
            {children}
        </Wrapper>

    )

}

export default Layout;

const Wrapper = styled.div`
    margin: auto;
    margin-top: 10px;

    h1 {
        width: 100%;
        background-color: black;
        color: white;
    }
    
`