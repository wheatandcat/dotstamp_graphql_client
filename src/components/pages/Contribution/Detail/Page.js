// @flow
import React from "react"
import styled from "styled-components"
import MuiTypography from "material-ui/Typography"
import Hidden from "material-ui/Hidden"
import type { ContributionDetail as ContributionDetailProps } from "../../../../api/contributionDetail"
import type { Tag } from "../../../../api/tag"
import List from "../../../organisms/Contribution/Chat/List"
import Actions, {
  Button as ActionsButton,
} from "../../../organisms/Contribution/Detail/Actions"
import User, {
  User as UserStorybook,
} from "../../../organisms/Contribution/Detail/User"
import Tags from "../../../organisms/Contribution/Detail/Tags"

type Props = {
  userId: number,
  items: Array<ContributionDetailProps>,
  followCount: number,
  followed: boolean,
  title: string,
  tags: Array<Tag>,
}

const Typography = styled(MuiTypography)`
  padding: 0.75rem;
`

const ActionZone = styled.div`
  position: fixed;
  padding-top 8rem !important;
  padding-left 6rem !important;
`

const Side = styled.div`
  width: 20rem;
`

const Main = styled.div`
  width: 100%;
`

const Root = styled.div`
  display: flex;
  flexgrow: 1;
  padding: 1rem 2rem;
`

export default ({
  items,
  followCount,
  followed,
  tags,
  title,
  userId,
}: Props) => (
  <Root>
    <Hidden mdDown>
      <Side>
        <ActionZone>
          <Actions followCount={followCount} followed={followed} />
        </ActionZone>
      </Side>
    </Hidden>
    <Main>
      {process.env.STORYBOOK_ENV === "storybook" ? (
        <UserStorybook
          name="foo"
          avatarUrl="https://dotstamp.com/static/files/icon/4.jpg"
        />
      ) : (
        <User id={userId} />
      )}
      <Typography type="display3" gutterBottom>
        {title}
      </Typography>
      <Tags items={tags} />
      <Hidden lgUp>
        <ActionsButton followCount={followCount} followed={followed} />
      </Hidden>
      <List items={items} />
    </Main>
  </Root>
)
