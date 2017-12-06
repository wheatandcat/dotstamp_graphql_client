// @flow
import React from "react"
import App from "../App"
import { type Props as ItemProps } from "./Item"
import { Item } from "./"

export type Props = {
  items: Array<ItemProps>
}

export default ({ items }: Props) => (
  <App title='ユーザー'>
    <div>{items.map(item => <Item key={item.id} {...item} />)}</div>
  </App>
)
