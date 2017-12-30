// @flow
import React from "react"
import styled from "styled-components"
import MuiCard, {
  CardContent,
  CardMedia as MuiCardMedia
} from "material-ui/Card"
import Typography from "material-ui/Typography"
import ThumbUpIcon from "material-ui-icons/ThumbUp"
import MuiLabelIcon from "material-ui-icons/Label"
import Button from "material-ui/Button"

type TagsProps = {
  id: number,
  name: string,
}

export type Props = {
  createdAt: string,
  follow: number,
  id: number,
  tags: TagsProps,
  title: string,
  userId: number,
  viewStatus: number,
}

const Card = styled(MuiCard)`
  display: flex;
`

const CardMedia = styled(MuiCardMedia)`
  margin: 1rem;
  width: 3rem;
  height: 3rem;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`

const Word = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;

  > div:first-child {
    margin-right: 1rem;
  }

  > div:nth-child(2) {
    margin-top: 0.1rem;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  > div:nth-child(2) {
    margin-right: 0.5rem;
  }
`

const Tags = styled(Typography)`
  line-height: 1rem;
  > div {
    display: flex;
    align-items: flex-start;
  }
`

const TagButton = styled(Button)`
  padding: 0 0.2rem 1rem 0.2rem !important;
  height: 1rem !important;
  min-width: 0 !important;
  min-height: 1.5rem !important;
  text-transform: none !important;
`

const LabelIcon = styled(MuiLabelIcon)`
  margin-top: 0.3rem;
  width: 1.25rem !important;
  height: 1.25rem !important;
`

export default ({
  id,
  follow,
  title,
  userId,
  tags,
  viewStatus,
  createdAt
}: Props) => (
  <Card>
    <CardMedia
      image='https://dotstamp.com/static/images/common/icon.png'
      title='Live from space album cover'
    />
    <Frame>
      <CardContent>
        <Typography type='headline'>{title}</Typography>
        <Typography type='subheading' color='secondary'>
          <Word>
            <div>by 麦と猫さんが、{createdAt}投稿</div>
            <div>
              <ThumbUpIcon />
            </div>
            <div>{follow}</div>
          </Word>
        </Typography>
        <Tags type='subheading' color='secondary'>
          <Word>
            <div>
              <LabelIcon />
            </div>
            {tags.map(tag => (
              <div key={tag.id}>
                <TagButton dense>{tag.name}</TagButton>
              </div>
            ))}
          </Word>
        </Tags>
      </CardContent>
    </Frame>
  </Card>
)
