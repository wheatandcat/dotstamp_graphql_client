// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import User from "./"

storiesOf("organisms/Contribution/Detail/User", module)
  .addDecorator(withKnobs)
  .add("User", () => <User />)
