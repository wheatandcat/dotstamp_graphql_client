// @flow
import React from "react"
import AvatarBalloon from "react-chat-balloon"
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

export default ({ items }: Props) => (
  <div>
    {items.map(({ body, character, priority }) => (
      <div key={priority}>
        <AvatarBalloon
          avatarUtl={charaURL(character.fileName)}
          avatarStyle={{ width: "10rem" }}
        >
          {body}
        </AvatarBalloon>
      </div>
    ))}
  </div>
)
