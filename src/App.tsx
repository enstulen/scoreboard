import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import ChallengeList from './components/challenge/ChallengeList'
import { ReduxState } from './shared/Types'
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
  connect((state: ReduxState) => ({
    challenges: state.firestore.ordered.challenges
  }))
)(App)
