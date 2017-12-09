// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import App from "../../App"
import { Summary } from "./"

storiesOf("Contribution/List", module)
  .addDecorator(withKnobs)
  .add("Summary", () => (
    <App open={boolean("open", false)}>
      <Summary
        items={[
          {
            id: 1,
            title: "foo",
            userId: 1,
            viewStatus: 1,
            createdAt: "2010-10-01 10:00:00",
            updatedAt: "2010-10-01 10:00:00",
            deletedAt: null
          },
          {
            id: 2,
            title: "bar",
            userId: 1,
            viewStatus: 1,
            createdAt: "2010-10-01 10:00:00",
            updatedAt: "2010-10-01 10:00:00",
            deletedAt: "2010-10-01 10:00:00"
          }
        ]}
      />
    </App>
  ))
