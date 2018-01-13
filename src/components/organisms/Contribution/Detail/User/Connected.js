import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { CircularProgress } from "material-ui/Progress"
import { iconURL } from "../../../../../lib/image"
import { User as UserComponent } from "./"

const Plain = ({ user }: *) => {
  if (user === undefined) {
    return <CircularProgress />
  }

  return (
    <UserComponent name={user.name} avatarUrl={iconURL(user.profileImageId)} />
  )
}

const User = gql`
  query User($id: Int) {
    user(id: $id) {
      name
      profileImageId
    }
  }
`

const PlainWithData = graphql(User, {
  options: ({ id }) => ({ variables: { id } }),
  props: ({ data }) => ({ ...data }),
})(Plain)

export default PlainWithData
