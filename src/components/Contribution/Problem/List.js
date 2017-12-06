// @flow
import React from "react"
import Table, { TableBody } from "material-ui/Table"
import { type Props as ItemProps } from "./Item"
import { Header, Item } from "./"

export type Props = {
  items: Array<ItemProps>
}

export default ({ items }: Props) => (
  <Table>
    <Header />
    <TableBody>{items.map(item => <Item key={item.id} {...item} />)}</TableBody>
  </Table>
)
