// @flow
import React from "react"
import Paper from "material-ui/Paper"
import App from "../../App"
import { type Props as ListProps } from "./List"
import { List } from "./"

type Props = ListProps

export default ({ items }: Props) => (
  <App title='通報ログ'>
    <Paper>
      <List items={items} />
    </Paper>
  </App>
)
