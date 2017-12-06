// @flow
type Contribution = {
  id: number,
  title: string,
  userId: number,
  viewStatus: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: ?string
}

export type ContributionList = Array<Contribution>
