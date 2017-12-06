// @flow
import React from "react"
import styled from "styled-components"
import Paper from "material-ui/Paper"
import App from "../App"

const Contents = styled.div`
  height: 10rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => (
  <App title='Home'>
    <Paper>
      <Contents>
        <div>.stmap/admin</div>
      </Contents>
    </Paper>
  </App>
)
