import React from 'react'
import { Route } from 'react-router-dom'

import Login from '../components/Login/Login'
import App from '../components/App/App'

export default [
  <Route key="login" path="/login" component={Login}/>,
  <Route key="home" path="/" component={App}/>
]
