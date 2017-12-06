// @flow
import React from "react"
import gql from "graphql-tag"
import type { UserList } from "../../api/userList"
import withCharacter from "../../connect"
import { Summary } from "./"

const MuiFeedWithData = ({ userList }: { userList: UserList }) => <Summary items={userList || []} />

export default withCharacter(
  gql`
    query UserListAppQuery {
      userList(first: 100) {
        id
        name
        email
        profileImageId
        createdAt
      }
    }
  `,
  MuiFeedWithData
)
