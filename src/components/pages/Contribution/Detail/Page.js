// @flow
import React from "react"
import Grid from "material-ui/Grid"
import type { ContributionDetail as ContributionDetailProps } from "../../../../api/contributionDetail"
import List from "../../../organisms/Contribution/Chat/List"
import Actions from "../../../organisms/Contribution/Detail/Actions"

type Props = {
  items: Array<ContributionDetailProps>,
}

export default ({ items }: Props) => (
  <Grid container>
    <Grid item xs={12}>
      <div>aaaa</div>
    </Grid>
    <Grid item xs={2}>
      <Actions />
    </Grid>
    <Grid item xs={10}>
      <List items={items} />
    </Grid>
  </Grid>
)
