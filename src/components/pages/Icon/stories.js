// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import App from "../../organisms/App"
import Page from "./"

storiesOf("pages/Icon", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App>
      <Page />
    </App>
  ))
