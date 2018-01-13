// @flow
import React from "react"
import styled from "styled-components"
import Button from "material-ui/Button"
import ThumbUpIcon from "material-ui-icons/ThumbUp"
import DoneIcon from "material-ui-icons/Done"
import Tooltip from "material-ui/Tooltip"

type Props = {
  followCount: number,
  followed?: boolean,
}

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

export default ({ followCount, followed }: Props) => (
  <Root>
    <div>
      <FollowCount>{followCount}</FollowCount>
      {(() => {
        if (followed) {
          return (
            <Tooltip id="tooltip-icon" placement="right" title="いいね済み">
              <FollowIcon fab aria-label="followed">
                <DoneIcon />
              </FollowIcon>
            </Tooltip>
          )
        }

        return (
          <Tooltip id="tooltip-icon" placement="right" title="いいね">
            <FollowIcon fab aria-label="add">
              <ThumbUpIcon />
            </FollowIcon>
          </Tooltip>
        )
      })()}
    </div>
  </Root>
)
