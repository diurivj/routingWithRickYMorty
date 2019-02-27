import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/character/:id" component={Detail} />
    <Route component={() => <div>This page doesn't exist yet</div>} />
  </Switch>
)

export default Routes
