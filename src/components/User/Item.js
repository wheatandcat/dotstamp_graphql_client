// @flow
import React from "react"
import styled from "styled-components"
import Avatar from "material-ui/Avatar"
import Card, { CardContent, CardHeader } from "material-ui/Card"
import Divider from "material-ui/Divider"
import { iconURL } from "../../lib/image"

export type Props = {
  id: number,
  name: string,
  email: string,
  profileImageId: number,
  createdAt: string
}

const Root = styled.div`
  margin-bottom: 2rem;
`

const CreateDate = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default ({ id, name, email, profileImageId, createdAt }: Props) => (
  <Root>
    <Card>
      <CardHeader
        avatar={<Avatar aria-label='recipe' src={iconURL(profileImageId)} />}
        title={name}
        subheader={`user_id:${id}`}
      />
      <Divider />
      <CardContent>
        <CreateDate component='p'>{createdAt}</CreateDate>
      </CardContent>
    </Card>
  </Root>
)
