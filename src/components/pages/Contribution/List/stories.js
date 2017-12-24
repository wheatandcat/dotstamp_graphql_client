// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import App from "../../../organisms/App"
import { Summary } from "./"

storiesOf("pages/Contribution/List", module)
  .addDecorator(withKnobs)
  .add("Summary", () => (
    <App open={boolean("open", false)}>
      <Summary
        items={[
          {
            createdAt: "2010-10-01 10:00:00",
            follow: 1,
            id: 1,
            tags: ["foo", "bar"],
            title: "foo",
            userId: 1,
            viewStatus: 1
          },
          {
            createdAt: "2010-10-01 10:00:00",
            follow: 1,
            id: 2,
            tags: [],
            title: "bar",
            userId: 1,
            viewStatus: 1
          }
        ]}
      />
    </App>
  ))
