// @flow
import React from "react"
import type { ContributionDetail as ContributionDetailProps } from "../../../../api/contributionDetail"
import List from "../../../organisms/Contribution/Chat/List"

type Props = {
  items: Array<ContributionDetailProps>,
}

export default ({ items }: Props) => (
  <div>
    <List items={items} />
  </div>
)
