// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import App from "../../organisms/App"
import Page from "./"

storiesOf("pages/Signup", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App open={boolean("open", false)}>
      <Page />
    </App>
  ))
