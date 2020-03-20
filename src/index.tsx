import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Routes from './navigation/Routes'
import Navbar from './components/navbar/Navbar'
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>,

  document.getElementById('root')
)
serviceWorker.unregister()
