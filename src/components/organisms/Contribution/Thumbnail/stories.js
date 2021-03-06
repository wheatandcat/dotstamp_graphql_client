// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "./"

storiesOf("organisms/Contribution/Thumbnail", module).add("Thumbnail", () => (
  <Thumbnail
    createdAt="2010-10-01 10:00:00"
    follow={1}
    id={1}
    tags={[
      {
        id: 1,
        name: "foo",
      },
    ]}
    title="foo"
    userId={1}
    userName="foo"
    viewStatus={1}
  />
))
