// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Provider from "./Provider"
import App from "./components/organisms/App"
import ContributionList from "./components/pages/Contribution/List"
import SignupRegistration from "./components/pages/Signup/Registration"

export default () => (
  <Provider>
    <Router>
      <App>
        <div>
          <Route exact path='/' component={ContributionList} />
          <Route path='/contributionList' component={ContributionList} />
          <Route path='/users/create' component={SignupRegistration} />
        </div>
      </App>
    </Router>
  </Provider>
)
