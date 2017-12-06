// @flow
type Problem = {
  id: number,
  title: string,
  userId: number,
  type: number,
  createdAt: string
}

export type ProblemList = Array<Problem>
