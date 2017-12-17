// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import App from "../App"
import Page from "./"

storiesOf("Login", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App>
      <Page />
    </App>
  ))
