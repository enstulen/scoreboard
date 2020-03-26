//@ts-nocheck
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/Login'
import RegisterChallenge from '../pages/RegisterChallenge/RegisterChallenge'

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path='/register'>
        <RegisterChallenge />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <App />
      </Route>
    </Switch>
  )
}

export default Routes
