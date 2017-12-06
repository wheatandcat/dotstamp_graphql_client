// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { Item, Summary } from "./"

storiesOf("Question", module)
  .add("Summary", () => (
    <Summary
      items={[
        {
          id: 1,
          email: "foo@com",
          userId: 1,
          body: "foo...bar...baz...",
          createdAt: "2010-10-01 10:00:00"
        },
        {
          id: 2,
          email: "foo@com",
          userId: 1,
          body: "foo...bar...baz...",
          createdAt: "2010-10-01 10:00:00"
        }
      ]}
    />
  ))
  .add("Item", () => (
    <Item
      id={1}
      email='foo@com'
      userId={1}
      body='foo...bar...baz...'
      createdAt={"2010-10-01 10:00:00"}
    />
  ))
