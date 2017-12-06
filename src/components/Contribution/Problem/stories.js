// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { List, Item, Header, Summary } from "./"

storiesOf("Contribution/Problem", module)
  .add("Summary", () => (
    <Summary
      items={[
        {
          id: 1,
          title: "foo",
          userId: 1,
          type: 1,
          createdAt: "2010-10-01 10:00:00"
        },
        {
          id: 2,
          title: "bar",
          userId: 1,
          type: 1,
          createdAt: "2010-10-01 10:00:00"
        }
      ]}
    />
  ))
  .add("List", () => (
    <List
      items={[
        {
          id: 1,
          title: "foo",
          userId: 1,
          type: 1,
          createdAt: "2010-10-01 10:00:00"
        },
        {
          id: 2,
          title: "bar",
          userId: 1,
          type: 1,
          createdAt: "2010-10-01 10:00:00"
        }
      ]}
    />
  ))
  .add("Header", () => <Header />)
  .add("Item", () => (
    <Item id={1} title='foo' userId={1} type={1} createdAt='2010-10-01 10:00:00' />
  ))
