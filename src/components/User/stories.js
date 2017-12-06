// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { Item, Summary } from "./"

storiesOf("User", module)
  .add("Summary", () => (
    <Summary
      items={[
        {
          id: 1,
          name: "foo",
          email: "foo@com",
          profileImageId: 0,
          createdAt: "2010-10-01 10:00:00"
        },
        {
          id: 2,
          name: "bar",
          email: "bar@com",
          profileImageId: 1,
          createdAt: "2010-10-01 10:00:00"
        }
      ]}
    />
  ))
  .add("Item", () => (
    <Item id={1} name='foo' email='foo@com' profileImageId={1} createdAt={"2010-10-01 10:00:00"} />
  ))
