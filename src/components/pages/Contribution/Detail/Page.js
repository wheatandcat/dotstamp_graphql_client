import React from "react"
import styled from "styled-components"
import YouTube from "react-youtube"
import { compose, withState, type HOC } from "recompose"
import MuiTypography from "material-ui/Typography"
import Hidden from "material-ui/Hidden"
import Tabs, { Tab as MuiTab } from "material-ui/Tabs"
import MuiAppBar from "material-ui/AppBar"
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

type State = {
  tab: number,
  setTab: (tab: number) => void,
}

type Props = {
  userId: number,
  items: Array<ContributionDetailProps>,
  followCount: number,
  followed: boolean,
  title: string,
  tags: Array<Tag>,
  movieId: string,
}

const Typography = styled(MuiTypography)`
  padding: 0.75rem;
`

const AppBar = styled(MuiAppBar)`
  background-color: #1d8bf1 !important;
  margin: 1rem 0;
`

const Tab = styled(MuiTab)`
  max-width: none !important;
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

const Movie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`

const enhance: HOC<State, Props> = compose(withState("tab", "setTab", 0))

const Plain = ({
  items,
  followCount,
  followed,
  tags,
  title,
  userId,
  tab,
  setTab,
  movieId,
}: Props & State) => (
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

      <AppBar position="static">
        <Tabs value={tab} onChange={(event, value) => setTab(value)} fullWidth>
          <Tab label="記事" />
          {movieId !== "" ? <Tab label="Youtube" /> : null}
        </Tabs>
      </AppBar>

      {tab === 0 && <List items={items} />}
      {tab === 1 && (
        <Movie>
          <YouTube videoId={movieId} />
        </Movie>
      )}
    </Main>
  </Root>
)

export default enhance(Plain)
