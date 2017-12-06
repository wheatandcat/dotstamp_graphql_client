// @flow
import React from "react"
import gql from "graphql-tag"
import type { ProblemList } from "../../../api/problemList"
import withCharacter from "../../../connect"
import { Summary } from "./"

const MuiFeedWithData = ({ problemList }: { problemList: ProblemList }) => (
  <Summary items={problemList || []} />
)

export default withCharacter(
  gql`
    query ProblemListAppQuery {
      problemList(first: 100) {
        id
        userId
        type
        title
        userContributionId
        createdAt
      }
    }
  `,
  MuiFeedWithData
)
