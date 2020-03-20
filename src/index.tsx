import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import Routes from './navigation/Routes'
import { Provider } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBK18bmdoHwzc4TVdp6pM8qdDI4C6_mwxk',
  authDomain: 'challenges-scoreboard.firebaseapp.com',
  databaseURL: 'https://challenges-scoreboard.firebaseio.com',
  projectId: 'challenges-scoreboard',
  storageBucket: 'challenges-scoreboard.appspot.com',
  messagingSenderId: '718152674889',
  appId: '1:718152674889:web:30478c643195eac869d998',
  measurementId: 'G-HLT387EGY8'
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore()
firebase.analytics()

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById('root')
)
serviceWorker.unregister()
