// @flow
import React from "react"

export type Props = {
  id: number,
  title: string,
  userId: number,
  viewStatus: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: ?string
}

export default ({
  id, title, userId, viewStatus, createdAt, updatedAt, deletedAt
}: Props) => (
  <div>aaaa</div>
)
