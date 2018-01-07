// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import List from "./"

storiesOf("organisms/Contribution/Chat", module).add("List", () => (
  <List
    items={[
      {
        body: "foo",
        character: {
          fileName: "default1.png",
          id: 1,
          voiceType: 1,
        },
        priority: 1,
      },
      {
        body: "foo",
        character: {
          fileName: "default1.png",
          id: 1,
          voiceType: 1,
        },
        priority: 2,
      },
    ]}
  />
))
