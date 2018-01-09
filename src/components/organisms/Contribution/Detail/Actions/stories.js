// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import Button from "./"

storiesOf("organisms/Contribution/Detail/Actions", module)
  .addDecorator(withKnobs)
  .add("Button", () => <Button followCount={10} />)
