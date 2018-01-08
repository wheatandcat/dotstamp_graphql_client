// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs/react"
import App from "../../../organisms/App"
import { Page } from "./"

storiesOf("pages/Contribution/Detail", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App>
      <Page
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
    </App>
  ))
