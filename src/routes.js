// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Provider from "./Provider"
import App from "./components/organisms/App"
import ContributionList from "./components/pages/Contribution/List"
import SignupRegistration from "./components/pages/Signup/Registration"
import Signup from "./components/pages/Signup/Index"
import Login from "./components/pages/Login"

export default () => (
  <Provider>
    <Router>
      <App>
        <div>
          <Route exact path="/" component={ContributionList} />
          <Route path="/contributionList" component={ContributionList} />
          <Route path="/users/create" component={SignupRegistration} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </App>
    </Router>
  </Provider>
)
