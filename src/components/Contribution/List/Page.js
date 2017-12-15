// @flow
import React from "react"
import gql from "graphql-tag"
import type { ContributionList } from "../../../api/contributionList"
import withCharacter from "../../../connect"
import { Summary } from "./"

const MuiFeedWithData = ({ contributionList }: { contributionList: ContributionList }) => (
  <Summary items={contributionList || []} />
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
