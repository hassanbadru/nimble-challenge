import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  withRouter,
  useLocation
} from "react-router-dom";

import CandidatesPage from "./pages/candidatesPage"
import { useCandidate } from './contexts/candidatecontext'


const AppView = props => {

 let { loadData } = useCandidate()

 useEffect(()=> {
     loadData()
  }, [])

  return (
      <>
      <Redirect to="/candidates" />
      <Switch>
          <Route path="/candidates">
              <CandidatesPage />
          </Route>

      </Switch>
      </>
  )

}

const AppViewWithRouter = withRouter(AppView)

const App = props => {

  return (
    <Router>
        <AppViewWithRouter />
    </Router>
    )
}

export default App;
