// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs/react"
import App from "../../../organisms/App"
import { Page } from "./"

const items = priority => ({
  body: "foo",
  character: {
    fileName: "default1.png",
    id: 1,
    voiceType: 1,
  },
  priority,
})

storiesOf("pages/Contribution/Detail", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <App>
      <Page
        items={Array.from(new Array(60)).map((priority, index) => items(index))}
        followCount={10}
        followed={boolean("followed", false)}
        title="foo bar baz"
        tags={[{ id: 1, name: "foo" }, { id: 2, name: "foobarbaz" }]}
        movieId="LHGPkS-HjZs"
      />
    </App>
  ))
