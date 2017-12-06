// @flow
import React from "react"
import { TableCell, TableRow } from "material-ui/Table"

export type Props = {
  id: number,
  title: string,
  userId: number,
  type: number,
  createdAt: string
}

export default ({ id, title, userId, type, createdAt }: Props) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{userId}</TableCell>
    <TableCell>{type === 1 ? "スパム" : "その他"}</TableCell>
    <TableCell>{createdAt}</TableCell>
  </TableRow>
)
