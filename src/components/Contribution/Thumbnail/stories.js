// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "./"

storiesOf("Contribution/Thumbnail", module).add("Thumbnail", () => (
  <Thumbnail
    id={1}
    title='foo'
    userId={1}
    viewStatus={1}
    createdAt='2010-10-01 10:00:00'
    updatedAt='2010-10-01 10:00:00'
    deletedAt={null}
  />
))
