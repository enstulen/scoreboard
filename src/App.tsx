//@ts-nocheck
import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import ChallengeList from './components/challenge/ChallengeList'
const App = ({ challenges }) => {
  return (
    <div>
      <h1>Siste spill</h1>
      <ChallengeList challenges={challenges}></ChallengeList>
    </div>
  )
}
export default compose(
  firestoreConnect(() => ['challenges']),
  connect(state => ({
    challenges: state.firestore.ordered.challenges
  }))
)(App)
