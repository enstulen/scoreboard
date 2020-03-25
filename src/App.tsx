//@ts-nocheck
import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import ChallengeList from './components/challenge/ChallengeList'
const App = ({ challenges }) => {
  return <ChallengeList challenges={challenges}></ChallengeList>
}
export default compose(
  firestoreConnect(() => ['challenges']),
  connect(state => ({
    challenges: state.firestore.ordered.challenges
  }))
)(App)
