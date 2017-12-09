// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Provider from "./Provider"
import App from "./components/App"
import ContributionList from "./components/Contribution/List"

export default () => (
  <Provider>
    <App>
      <Router>
        <div>
          <Route exact path='/' component={ContributionList} />
          <Route path='/contributionList' component={ContributionList} />
        </div>
      </Router>
    </App>
  </Provider>
)
