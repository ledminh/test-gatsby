import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <Main>
      <h1>This is main thing</h1>
      <Link to="a-blog-post">A blog post</Link>

    </Main>
  )
}

export default IndexPage

const Main = styled.main`

`