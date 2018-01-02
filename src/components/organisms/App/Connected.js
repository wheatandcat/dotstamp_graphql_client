// @flow
import React from "react"
import gql from "graphql-tag"
import { CircularProgress } from "material-ui/Progress"
import type { User } from "../../../api/userList"
import withCharacter from "../../../connect"
import Guest from "./Guest"
import Login from "./Login"

const Plain = ({ me, open }: { me: User, open: boolean }) => {
  if (!me) {
    return <CircularProgress size={25} />
  }

  if (me.id > 0) {
    return <Login open={open} name={me.name} />
  }

  return <Guest open={open} />
}

export default withCharacter(
  gql`
    {
      me {
        id
        name
        email
        profileImageId
        createdAt
      }
    }
  `,
  Plain
)
