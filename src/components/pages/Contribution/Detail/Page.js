// @flow
import React from "react"
import Grid from "material-ui/Grid"
import styled from "styled-components"
import MuiTypography from "material-ui/Typography"
import type { ContributionDetail as ContributionDetailProps } from "../../../../api/contributionDetail"
import List from "../../../organisms/Contribution/Chat/List"
import Actions from "../../../organisms/Contribution/Detail/Actions"
import User from "../../../organisms/Contribution/Detail/User"

type Props = {
  items: Array<ContributionDetailProps>,
  followCount: number,
  followed: boolean,
  title: string,
}

const Typography = styled(MuiTypography)`
  padding: 0.75rem;
`

export default ({ items, followCount, followed, title }: Props) => (
  <Grid container>
    <Grid item xs={2}>
      <Actions followCount={followCount} followed={followed} />
    </Grid>
    <Grid item xs={10}>
      <User />
      <Typography type="display3" gutterBottom>
        {title}
      </Typography>
      <List items={items} />
    </Grid>
  </Grid>
)
