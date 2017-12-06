// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { center } from "../../../.storybook/decorators"
import AppBar, { Menu } from "./"

storiesOf("App", module)
  .addDecorator(withKnobs)
  .addDecorator(center)
  .add(" AppBar", () => <AppBar title='foo'>foo</AppBar>)
  .add(" Menu", () => <Menu />)
