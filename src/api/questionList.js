// @flow
type Question = {
  id: number,
  email: string,
  userId: number,
  body: string,
  createdAt: string
}

export type QuestionList = Array<Question>
