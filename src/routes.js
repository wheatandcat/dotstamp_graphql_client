// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Provider from "./Provider"
import ContributionList from "./components/Contribution/List"
import ContributionProblem from "./components/Contribution/Problem"
import Question from "./components/Question"
import User from "./components/User"
import Home from "./components/Home"

export default () => (
  <Provider>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/contributionList' component={ContributionList} />
        <Route path='/problem' component={ContributionProblem} />
        <Route path='/question' component={Question} />
        <Route path='/user' component={User} />
      </div>
    </Router>
  </Provider>
)
