// @flow
import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import type { ContributionDetail as ContributionDetailProps } from "../../../../api/contributionDetail"
import { Page } from "./"

const Plain = ({
  contributionDetail,
}: {
  contributionDetail: ContributionDetailProps,
}) => {
  console.log(contributionDetail)
  if (contributionDetail === undefined) {
    return <div />
  }

  return <Page items={contributionDetail} />
}

const ContributionDetail = gql`
  query ContributionDetail($id: Int) {
    contributionDetail(id: $id) {
      body
      priority
      character {
        id
        fileName
        voiceType
      }
    }
  }
`

const PlainWithData = graphql(ContributionDetail, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(Plain)

export default PlainWithData
