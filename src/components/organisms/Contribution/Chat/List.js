// @flow
import React from "react"
import AvatarBalloon from "react-chat-balloon"
import MuiPaper from "material-ui/Paper"
import styled from "styled-components"
import { charaURL } from "../../../../lib/image"

type Character = {
  fileName: string,
  id: number,
  voiceType: string,
}

type Item = {
  body: string,
  character: Character,
  priority: number,
}

type Props = {
  items: Array<Item>,
}

const Frame = styled.div`
  min-width 50rem !important;
  margin: 0.25rem;
  padding 0.5rem;
`

const Paper = styled(MuiPaper)`
  padding 0.25rem 2rem;
`

export default ({ items }: Props) => (
  <div>
    {items.map(({ body, character, priority }) => (
      <Frame key={priority}>
        <Paper>
          <AvatarBalloon
            avatarUtl={charaURL(character.fileName)}
            avatarStyle={{ width: "10rem" }}
          >
            {body}
          </AvatarBalloon>
        </Paper>
      </Frame>
    ))}
  </div>
)
