// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import App from "../App"
import Page from "./"

storiesOf("Login", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App open={boolean("open", false)}>
      <Page />
    </App>
  ))
