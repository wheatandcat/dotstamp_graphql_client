// @flow
import React from "react"
import styled from "styled-components"
import MuiTypography from "material-ui/Typography"
import ListIcon from "material-ui-icons/List"
import MuiPaper from "material-ui/Paper"
import Thumbnail from "../Thumbnail"

const Root = styled.div`
  padding: 1rem 3rem;
`

const Item = styled.div`
  margin 0.3rem 0;
`
const Paper = styled(MuiPaper)`
  padding: 1rem;
  margin-bottom: 1.5rem;
`

const Typography = styled(MuiTypography)`
  display: flex !important;
  align-items: center !important;

  > div {
    > svg {
      margin-right: 1rem;
      margin-top: 0.25rem;
    }
  }
`

export default () => (
  <Root>
    <Paper>
      <Typography type='headline' component='h2'>
        <div>
          <ListIcon />
        </div>
        <div>新着投稿 deploy test</div>
      </Typography>
    </Paper>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
      <Item key={item}>
        <Thumbnail />
      </Item>
    ))}
  </Root>
)
