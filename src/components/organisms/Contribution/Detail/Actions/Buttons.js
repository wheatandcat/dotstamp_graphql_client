// @flow
import React from "react"
import styled from "styled-components"
import Button from "material-ui/Button"
import ThumbUpIcon from "material-ui-icons/ThumbUp"
import DoneIcon from "material-ui-icons/Done"

type Props = {
  followCount: number,
  followed?: boolean,
}

const Root = styled.div`
  margin: 1rem 0;
  padding: 1rem;
`

const FollowCount = styled.div`
  padding-left: 1rem;
  font-size: 2rem;
  font-weight: 700;
`

const FollowButton = styled(Button)`
  background-color: #4bbd00 !important;
  color: #fff !important;
  width: 100%;
  min-width: 41rem !important;
`

export default ({ followCount, followed }: Props) => (
  <Root>
    <div>
      {(() => {
        if (followed) {
          return (
            <FollowButton aria-label="followed">
              <DoneIcon />
              <FollowCount>{followCount}</FollowCount>
            </FollowButton>
          )
        }

        return (
          <FollowButton aria-label="add">
            <ThumbUpIcon />
            <FollowCount>{followCount}</FollowCount>
          </FollowButton>
        )
      })()}
    </div>
  </Root>
)
