// @flow
import React from "react"
import styled from "styled-components"
import MuiTypography from "material-ui/Typography"
import ListIcon from "material-ui-icons/List"
import MuiPaper from "material-ui/Paper"
import Thumbnail from "../../../organisms/Contribution/Thumbnail"

type Tags = {
  id: number,
  name: string
}

type ItemProps = {
  createdAt: string,
  follow: number,
  id: number,
  tags: Tags,
  title: string,
  updatedAt: string,
  userId: number,
  viewStatus: number
}

type Props = {
  items: Array<ItemProps>
}

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

export default ({ items }: Props) => (
  <Root>
    <Paper>
      <Typography type="headline" component="h2">
        <div>
          <ListIcon />
        </div>
        <div>新着投稿</div>
      </Typography>
    </Paper>
    {items.map(({
      createdAt, follow, id, title, userId, tags, viewStatus,
    }) => (
      <Item key={id}>
        <Thumbnail
          createdAt={createdAt}
          follow={follow}
          id={id}
          tags={tags}
          title={title}
          userId={userId}
          viewStatus={viewStatus}
        />
      </Item>
    ))}
  </Root>
)
