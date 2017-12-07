// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { center } from "../../../.storybook/decorators"
import AppBar from "./"

storiesOf("App", module)
  .addDecorator(withKnobs)
  .addDecorator(center)
  .add(" AppBar", () => (
    <AppBar title='foo' open={boolean("open", false)}>
      foo
    </AppBar>
  ))
