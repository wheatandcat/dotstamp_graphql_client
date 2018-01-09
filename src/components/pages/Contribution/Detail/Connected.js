// @flow
import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { Page } from "./"

const Plain = ({
  contribution,
  contributionDetail,
  followList,
  tagList,
}: *) => {
  console.log(contributionDetail)
  console.log(contribution)
  if (contributionDetail === undefined || contribution === undefined) {
    return <div />
  }

  return (
    <Page
      createdAt={contribution.createdAt}
      items={contributionDetail}
      title={contribution.title}
      userId={contribution.userId}
      followCount={followList.length}
      followed={
        followList.filter(
          item => item.userId === window.localStorage.getItem("userId")
        ).length > 0
      }
      tags={tagList}
    />
  )
}

const ContributionDetail = gql`
  query ContributionDetail($id: Int) {
    contribution(id: $id) {
      id
      userId
      title
      createdAt
    }
    contributionDetail(id: $id) {
      body
      priority
      character {
        id
        fileName
        voiceType
      }
    }
    followList(id: $id) {
      id
      userId
    }
    tagList(id: $id) {
      id
      name
    }
  }
`

const PlainWithData = graphql(ContributionDetail, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
  props: ({ data }) => ({ ...data }),
})(Plain)

export default PlainWithData
