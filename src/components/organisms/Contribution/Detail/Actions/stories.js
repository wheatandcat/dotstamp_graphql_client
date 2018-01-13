// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import Action, { Button } from "./"

storiesOf("organisms/Contribution/Detail/Actions", module)
  .addDecorator(withKnobs)
  .add("Action", () => <Action followCount={10} />)
  .add("Button", () => <Button followCount={10} />)
