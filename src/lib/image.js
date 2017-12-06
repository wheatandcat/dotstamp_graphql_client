// @flow
const host = "http://dotstamp.com/static/"

function imageURL (file: string): string {
  return host + file
}

export const iconURL = (id: number): string => {
  if (id === 0) {
    return imageURL("images//profile/default.png")
  }

  return imageURL(`files/icon/${id}.jpg`)
}

export default iconURL
