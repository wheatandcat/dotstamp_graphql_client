import { configure, addDecorator } from "@storybook/react"
import GithubCorner from "@personare/react-storybook-decorator-github-corner"
import { provider } from "./decorators"

addDecorator(GithubCorner)
addDecorator(provider)

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
