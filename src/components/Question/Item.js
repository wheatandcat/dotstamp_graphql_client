// @flow
import React from "react"
import styled from "styled-components"
import Card, { CardContent, CardHeader } from "material-ui/Card"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"

export type Props = {
  id: number,
  email: string,
  userId: number,
  body: string,
  createdAt: string
}

const Root = styled.div`
  margin-bottom: 2rem;
`

const CreateDate = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default ({ id, email, userId, body, createdAt }: Props) => (
  <Root>
    <Card>
      <CardHeader title={email} subheader={`user_id:${userId}`} />
      <Divider />
      <CardContent>
        <Typography component='p' paragraph>
          {body}
        </Typography>
      </CardContent>
      <CardContent>
        <CreateDate component='p'>{createdAt}</CreateDate>
      </CardContent>
    </Card>
  </Root>
)
