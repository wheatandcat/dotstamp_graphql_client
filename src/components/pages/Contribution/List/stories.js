// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import App from "../../../organisms/App"
import { Page } from "./"

storiesOf("pages/Contribution/List", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App>
      <Page
        items={[
          {
            createdAt: "2010-10-01 10:00:00",
            follow: 1,
            id: 1,
            tags: [
              {
                id: 1,
                name: "foo",
              },
            ],
            title: "foo",
            userId: 1,
            userName: "foo",
            viewStatus: 1,
          },
          {
            createdAt: "2010-10-01 10:00:00",
            follow: 1,
            id: 2,
            tags: [
              {
                id: 1,
                name: "foo",
              },
            ],
            title: "bar",
            userId: 1,
            userName: "foo",
            viewStatus: 1,
          },
        ]}
      />
    </App>
  ))
