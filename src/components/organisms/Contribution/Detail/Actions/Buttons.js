// @flow
import React from "react"
import styled from "styled-components"
import Button from "material-ui/Button"
import ThumbUpIcon from "material-ui-icons/ThumbUp"

const Root = styled.div`
  text-align: center;

  div {
    margin 1rem 0.5rem;
  }
`
const FollowCount = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #4bbd00 !important;
`

const FollowIcon = styled(Button)`
  background-color: #4bbd00 !important;
  color: #fff !important;
`

export default () => (
  <Root>
    <div>
      <FollowCount>10</FollowCount>
      <FollowIcon fab aria-label="add">
        <ThumbUpIcon />
      </FollowIcon>
    </div>
  </Root>
)
