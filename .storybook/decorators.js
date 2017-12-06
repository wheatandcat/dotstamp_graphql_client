/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

export const provider = story => (
  <Router>
    <div>{story()}</div>
  </Router>
)

export const center = story => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center"
    }}
  >
    {story()}
  </div>
)
