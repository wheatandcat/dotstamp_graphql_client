// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import Tags from "./"

storiesOf("organisms/Contribution/Detail/Tags", module)
  .addDecorator(withKnobs)
  .add("Tags", () => (
    <Tags items={[{ id: 1, name: "foo" }, { id: 2, name: "foobarbaz" }]} />
  ))
