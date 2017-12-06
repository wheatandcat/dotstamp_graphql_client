// @flow
import React from "react"
import gql from "graphql-tag"
import type { QuestionList } from "../../api/questionList"
import withCharacter from "../../connect"
import { Summary } from "./"

const MuiFeedWithData = ({ questionList }: { questionList: QuestionList }) => (
  <Summary items={questionList || []} />
)

export default withCharacter(
  gql`
    query QuestionListAppQuery {
      questionList(first: 100) {
        id
        userId
        email
        body
        createdAt
      }
    }
  `,
  MuiFeedWithData
)
