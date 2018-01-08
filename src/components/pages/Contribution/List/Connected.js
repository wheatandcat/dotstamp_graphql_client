// @flow
import React from "react"
import gql from "graphql-tag"
import withCharacter from "../../../../connect"
import type { Tag } from "../../../../api/tag"
import { Page } from "./"

type ItemProps = {
  createdAt: string,
  follow: number,
  id: number,
  tags: Array<Tag>,
  title: string,
  userId: number,
  userName: string,
  viewStatus: number,
}

export type Props = {
  items: Array<ItemProps>,
}

const MuiFeedWithData = ({ contributionList }: *) => (
  <Page items={contributionList || []} />
)

export default withCharacter(
  gql`
    query ContributionListAppQuery {
      contributionList(first: 100) {
        id
        title
        userId
        userName
        createdAt
        viewStatus
        tags {
          id
          name
        }
        follow
      }
    }
  `,
  MuiFeedWithData
)
