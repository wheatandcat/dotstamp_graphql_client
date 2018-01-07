// @flow
type Character = {
  fileName: string,
  id: number,
  voiceType: string,
}

export type ContributionDetail = {
  body: string,
  character: Character,
  priority: number,
}
